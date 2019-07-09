import * as cart from '@shopify/theme-cart';

$('input').change(function() {
  const currentQuantity = parseInt($(this).val(), 10);
  const minValue = parseInt($(this).attr('min'), 10);
  // If the max attribute doesn't exist for the item, should return false.
  const maxValue = parseInt($(this).attr('max'), 10);
  const key = $(this).attr('id').split('_', 2)[1];

  console.log(`Input for ${key}`);

  if (currentQuantity === minValue) {
    cart.removeItem(key).then(state => {
      console.log('This item was removed');
      updateCartTotals($(this), currentQuantity, 0, state.total_price);
      removeCartRow($(this));
    });
  } else if (!maxValue) {
    cart.updateItem(key, {quantity: currentQuantity}).then(state => {
      const currentItem = state.items.find(item => item.key === key);
      console.log(`The item with key '${key}' now has quantity ${currentItem.quantity} and a price of ${currentItem.price}`);
      updateCartTotals($(this), currentItem.quantity, currentItem.price, state.total_price);
    });
  } else if (currentQuantity <= maxValue) {
    cart.updateItem(key, {quantity: currentQuantity}).then(state => {
      const currentItem = state.items.find(item => item.key === key);
      console.log(`The item with key '${key}' now has quantity ${currentItem.quantity}`);
      updateCartTotals($(this), currentItem.quantity, currentItem.price, state.total_price);
    });
  }
});

function updateCartTotals(thisObj, itemPrice, quantity, subtotal) {
  const itemTotal = ((itemPrice * quantity) / 100).toFixed(2);
  thisObj.parents().eq(1).children("td.cart-money[data-label='Total']")
    .text(`$${itemTotal}`);
  $('#subtotal').text(`$${(subtotal / 100).toFixed(2)}`);
}

function removeCartRow(thisObj) {
  thisObj.parents().eq(1).remove();
}
