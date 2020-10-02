export interface Status {
  id: string;
  status: string;
}

export const createEmptyLookup = (): Status => ({
  id: '',
  status: '',
});
