import { useNavigate, useParams } from '@tanstack/react-router';
import { useMemo, useRef, useState } from 'react';

import { dayRoute } from '@app/router/routes/protected';

import { DailyStats } from '@widgets/day/DailyStats';
import { Error } from '@widgets/day/Error';
import { FoodList } from '@widgets/day/FoodList';
import { Header } from '@widgets/day/Header';
import { Loading } from '@widgets/day/Loading';
import { PromptSuggestions } from '@widgets/day/PromptSuggestions';
import { Totals } from '@widgets/day/Totals';
import { Weight } from '@widgets/day/Weight';

import { useDayDetailsQuery } from '@features/day/dayDetails';
import { AddFoodForm } from '@features/food/addFood';

import type { DayDetailsResponse } from '@entities/day';
import {
  type DayDetailsQueryParams,
  type DayDetailsSortField,
  type DayDetailsSortOrder,
  resolveDayParam,
} from '@entities/day';

import { formatDate } from '@shared/lib/date';
import { useSwipe } from '@shared/lib/swipe';
import { ROUTES } from '@shared/routes';
import { Card } from '@shared/ui/layout/Card';
import { Stack } from '@shared/ui/layout/Stack';

const getAdjacentDate = (dateStr: string, delta: number): string => {
  const [y, m, d] = dateStr.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  date.setDate(date.getDate() + delta);
  return formatDate(date);
};

export const DayPage = () => {
  const navigate = useNavigate();
  const { date } = useParams({ from: dayRoute.id });
  const resolvedDate = resolveDayParam(date);

  const [sortBy, setSortBy] = useState<DayDetailsSortField | undefined>(
    undefined,
  );
  const [sortOrder, setSortOrder] = useState<DayDetailsSortOrder | undefined>(
    undefined,
  );
  const [search, setSearch] = useState('');

  const dayDetailsParams: DayDetailsQueryParams | undefined = useMemo(() => {
    const hasSort = sortBy != null && sortOrder != null;
    const hasSearch = search.trim().length > 0;
    if (!hasSort && !hasSearch) return undefined;
    return {
      ...(hasSort && { sortBy, sortOrder }),
      ...(hasSearch && { search: search.trim() }),
    };
  }, [sortBy, sortOrder, search]);

  const swipe = useSwipe({
    onSwipeLeft: () =>
      navigate({
        to: ROUTES.app.day,
        params: { date: getAdjacentDate(resolvedDate, 1) },
      }),
    onSwipeRight: () =>
      navigate({
        to: ROUTES.app.day,
        params: { date: getAdjacentDate(resolvedDate, -1) },
      }),
  });

  const { data, isPending, isError, isFetching, error, refetch } =
    useDayDetailsQuery(resolvedDate, dayDetailsParams);

  const lastDataRef = useRef<Record<string, DayDetailsResponse>>({});
  if (data) lastDataRef.current[resolvedDate] = data;

  const displayData = data ?? lastDataRef.current[resolvedDate];

  if (isPending && !displayData) return <Loading />;
  if (isError && !displayData) return <Error refetch={refetch} error={error} />;
  if (!displayData) return <Loading />;

  const dayDetails = displayData;
  const { day, food, targetCalories, targetProtein, targetFat, targetCarbs } =
    dayDetails;
  const totals = day.totals;

  return (
    <Stack
      gap="lg"
      onTouchStart={swipe.onTouchStart}
      onTouchEnd={swipe.onTouchEnd}
    >
      <Header
        date={day.date}
        onPrevDay={() =>
          navigate({
            to: ROUTES.app.day,
            params: { date: getAdjacentDate(day.date, -1) },
          })
        }
        onNextDay={() =>
          navigate({
            to: ROUTES.app.day,
            params: { date: getAdjacentDate(day.date, 1) },
          })
        }
      />

      <Weight dayId={day.id} date={day.date} weight={day.weight} />

      <Totals
        calories={totals.calories}
        protein={totals.protein}
        proteinTarget={targetProtein}
        fat={totals.fat}
        fatTarget={targetFat}
        carbs={totals.carbs}
        carbsTarget={targetCarbs}
      />

      <DailyStats consumed={totals.calories} target={targetCalories} />

      <Card shadow="sm">
        <AddFoodForm
          date={day.date}
          suggestionsSlot={(onSelect) => (
            <PromptSuggestions onSelect={onSelect} />
          )}
        />
      </Card>

      <FoodList
        foods={food}
        date={day.date}
        sortBy={sortBy}
        sortOrder={sortOrder}
        search={search}
        isFetching={isFetching}
        onSortByChange={(v) => {
          setSortBy(v);
          if (v != null && sortOrder == null) setSortOrder('desc');
        }}
        onSortOrderChange={setSortOrder}
        onSearchChange={setSearch}
      />
    </Stack>
  );
};
