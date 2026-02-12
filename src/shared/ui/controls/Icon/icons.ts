import {
  Plus,
  Trash,
  Pencil,
  Check,
  X,
  Calendar,
  User,
  Settings,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  Utensils,
  BarChart3,
  Sun,
  Moon,
  SunMoon,
  ChevronDown,
  ChevronUp,
  Fish,
  Egg,
  Milk,
  Dumbbell,
  Carrot,
  Bean,
  Wheat,
  Cookie,
  Soup,
  Nut,
  Hamburger,
  Ham,
  GlassWater,
  Lollipop,
  Shell,
  Salad,
  Apple,
  EllipsisVertical,
  Mail,
  UserRoundPen,
  LockKeyhole,
} from 'lucide-react';

export const icons = {
  // actions
  plus: Plus,
  trash: Trash,
  edit: Pencil,
  check: Check,
  close: X,
  warning: AlertTriangle,
  more: EllipsisVertical,
  editUser: UserRoundPen,

  // navigation
  calendar: Calendar,
  today: Utensils,
  stats: BarChart3,
  profile: User,

  // misc
  settings: Settings,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  email: Mail,
  password: LockKeyhole,

  // theme
  themeLight: Sun,
  themeDark: Moon,
  themeSystem: SunMoon,

  // Food
  meat: Ham,
  fish: Fish,
  egg: Egg,
  dairy: Milk,
  protein: Dumbbell,

  vegetable: Carrot,
  fruit: Apple,
  legume: Bean,
  nut: Nut,

  grain: Wheat,

  sauce: Shell,
  sweet: Lollipop,
  snack: Cookie,
  fast_food: Hamburger,

  drink: GlassWater,

  mixed_dish: Soup,

  other: Salad,
} as const;
