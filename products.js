/* global Vue, axios */

var App = {
  data: function () {
    return {
      message: "Hello from JavaScript!",
      products: [],
      name: null,
      price: null,
      description: null,
      image_url: null
    };
  },
  methods: {
    created: function () {
      axios.get("http://localhost:3000/products").then((response) => {
        console.log(response.data);
      });
    },
    createProduct: function () {
      var params = { name: this.name, description: this.description, price: this.price, image_url: this.image_url };
      axios.post("http://localhost:3000/products", params).then((response) => {
        console.log(response.data);
      });
    },
    updateProduct: function () {
      var params = { name: this.name, description: this.description, price: this.price, image_url: this.image_url };
      axios.patch("http://localhost:3000/products/:id", params).then((response) => {
        console.log(response.data);
      });
    }
    deleteProduct: function () {
      axios.delete("http://localhost:3000/products/:id").then(response => {
        console.log(response);
      });
    },
  },
};

Vue.createApp(App).mount("#app");
