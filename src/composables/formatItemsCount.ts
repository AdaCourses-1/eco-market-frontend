export function formatItemsCount(count: number): string {
    if (count === 1) {
      return `${count} товар`;
    } else if (count >= 2 && count <= 4) {
      return `${count} товара`;
    } else {
      return `${count} товаров`;
    }
  }
  