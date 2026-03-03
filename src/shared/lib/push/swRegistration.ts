let resolveSW: (reg: ServiceWorkerRegistration) => void;
export const whenSWRegistered = new Promise<ServiceWorkerRegistration>(
  (resolve) => {
    resolveSW = resolve;
  },
);

export function setSWRegistration(reg: ServiceWorkerRegistration): void {
  resolveSW(reg);
}
