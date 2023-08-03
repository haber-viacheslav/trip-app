class LocalStorageService {
  getItem(key) {
    try {
      const serializedValue = localStorage.getItem(key);

      return !serializedValue ? undefined : JSON.parse(serializedValue);
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  }
  setItem(key, value) {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  }

  removeItem(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  }
}
export const localStorageService = new LocalStorageService();
