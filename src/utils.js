export function getImageUrl(product) {
  // Assuming product has an id or similar attribute to differentiate images
  const images = ['https://cf.autodeft2.pw/uploads/images/2020/Toyota/Toyota%20Camry/Europe/2021-Toyota-Camry-Hybrid-03.jpg'
    , 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5LBRp7i1ntw7Ac1aaRtwA9Xb4CJ77U03Wwf6zbv6WHbMR0eNdoo.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR3Ld3WdUDCWrXIBOuOyqDMYnfh8F0EDLn6Q&s',
    'https://cdn.wheel-size.com/automobile/body/ford-f-150-2024-2025-1719041920.73746.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTgKnveKu4iEeou1d_WfumJwH9iNPaXNNu-g&s',
    'https://prod.cosy.bmw.cloud/bmvis/cosySec?COSY-EU-100-2545J3qAHyFnz5cRoHSWRzMESDsVcRoH7QRzMESV59VMb3G6bUJ1rjGRPixrQbUoaFoGq0zdpbkKl38mrjGm7SErQbCUQMs2q0zRERW8J13882q0zAab4bl382hhq0zkRNSQBL4QSW8zLAd8W8J1ExSnQNUMESQdo3uuRCqoQEdcNq0zkdHNqoQqRrjGr9olDW8zWuniIqogqxRRJl3ilhbQqcRScTJrmMbnMZomsyJGyP36drQ%25rLRXHW8zWXbxGqogqxFbbl3ilhj8ocRScTzo7MbnMZgBuyJGyPiY3rQ%25rLSKCW8zWXn3CqogqxGU4l3ilh%25FQcRScTzm8MbnMZgsYyJGyPiztrQ%25rLSejW8zWXKF%25qogqxD%25zl3ilhCzjcRScT48gMbnMZeoqyJGyPmgprQ%25rL8RnW8zWXob9qogqx3Jnl3ilhR%250cRScTbz1MbnMZJCYyJGyPQLUrQ%25rL9oUW8zWXBJCqogqxYEQl3ilhEQ5cRScTFGVMbnMZjWYyJGyP7qNrQ%25rL01SW8zWXBwkqogqxYVIl3ilh4eocRScTezQMbnMZ8s8yJGyPV3pmW8JPHmoG6acYiJ%25apcRowW7%258uKUHqoQk8S2DlBgnRQqoQtyFnqoz9aUW8JaMESUe',
    'https://images.dealer.com/ddc/vehicles/2024/Mercedes-Benz/C-Class/Sedan/still/front-left/front-left-640-en_US.jpg',
    'https://www.checkraka.com/uploaded/logo/25/25a68a591a458baea0ffc3cdab22726c.webp',
    'https://whatcar.co.th/wp-content/uploads/2018/09/Subaru-Outback-2.5i-S-Front.jpg',
    'https://crdms.images.consumerreports.org/c_lfill,w_470,q_auto,f_auto/prod/cars/chrome/white/2021VWC020017_1280_01']; // Correctly formatted image names

  // You can use the product ID to select an image. Here is a simple example:
  const imageIndex = product.id % images.length; // Ensures the index is within the bounds of the images array
  return images[imageIndex]; // Return the corresponding image URL
}
