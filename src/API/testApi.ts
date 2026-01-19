export function fetchDummyGreeting(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("TanStack Query Working!");
    }, 500);
  });
}
