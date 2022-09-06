import { ref } from "vue";

export function isTrending(data) {
  const items = [];

  data.filter((item) => {
    if (item.isTrending) {
      items.push(item);
    }
  });

  return {
    items,
  };
}
