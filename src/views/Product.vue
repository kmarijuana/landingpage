<template>
  <div class="Product">
    <MemberLayout>
      <template #modal>
        <!-- modal product -->
        <input
          type="checkbox"
          id="modal-product"
          class="modal-toggle"
          v-model="product.modal"
        />
        <div class="modal">
          <div class="modal-box relative w-6/12 max-w-5xl">
            <label
              for="modal-product"
              class="btn btn-sm btn-circle absolute right-2 top-2"
              >✕
            </label>
            <h3 class="text-lg font-bold">Add new product!</h3>
            <div class="card-body overflow-auto" style="max-height: 60vh">
              <div class="form-control">
                <!-- {{product.form}} -->

                <UploadModule
                  v-if="product.modal"
                  :imageLink="product.form.imageLink"
                  :image="product.form.image"
                  :id="'product'"
                  :multiple="false"
                  @respone="
                    (res) => {
                      let length = product.form.image.length
                        ? product.form.image.length
                        : 0;
                      product.form.image = product.form.image.concat(res.image);
                    }
                  "
                  @resetdata="
                    (res) => {
                      product.form.image = [...res.image];
                    }
                  "
                />
                <label class="label">
                  <span class="label-text text-red-500"></span>
                  <span class="label-text-alt text-red-500 font-bold"
                    >* รูปนี้จะแสดงผลในข่อง search แต่ไม่แสดงในสินค้า</span
                  >
                </label>
              </div>

              <div class="grid gap-4 md:grid-cols-2 grid-cols-1">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Number</span>
                  </label>
                  <input
                    type="text"
                    placeholder="number"
                    class="input input-bordered"
                    v-model="product.form.number"
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    class="input input-bordered"
                    v-model="product.form.name"
                  />
                </div>
              
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Size</span>
                </label>
                <!-- <input
                  type="text"
                  placeholder="size"
                  class="input input-bordered"
                  v-model="product.form.size"
                /> -->
                <textarea
                  class="textarea textarea-bordered"
                  placeholder="Description"
                  v-model="product.form.size"
                  cols="5" rows="1"
                ></textarea>
              </div>
              <div class="grid gap-4 md:grid-cols-2 grid-cols-1">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Category</span>
                  </label>
                  <select
                    class="select select-bordered"
                    v-model="product.form.category_id"
                  >
                    <option disabled="disabled" selected="selected" value="0">
                      Choose category
                    </option>
                    <option
                      v-for="(row, index) in category.rows"
                      :key="index"
                      :value="row.id"
                    >
                      {{ row.title }}
                    </option>
                  </select>
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Store</span>
                  </label>
                  <select
                    class="select select-bordered"
                    v-model="product.form.store_id"
                  >
                    <option disabled="disabled" selected="selected" value="0">
                      Choose store
                    </option>
                    <option
                      v-for="(row, index) in store.rows"
                      :key="index"
                      :value="row.id"
                    >
                      {{ row.title }}
                    </option>
                  </select>
                </div>
              </div>

           
              <div class="form-control">
                <label class="label cursor-pointer">
                  <span class="label-text">Recommend</span>
                  <input
                    type="checkbox"
                    class="toggle"
                    checked
                    v-model="product.form.recommend"
                  />
                </label>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Description</span>
                </label>
                <textarea
                  class="textarea textarea-bordered"
                  placeholder="Description"
                  v-model="product.form.description"
                ></textarea>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Room data</span>
                </label>
                <input
                  type="text"
                  placeholder="Room data"
                  class="input input-bordered"
                  v-model="product.form.room"
                />
              </div>
                 <div class="form-control pt-4">
                <div class="w-full overflow-auto">
                  <table class="table table-compact w-full">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Color</th>

                        <th>Price</th>
                        <th>Link</th>
                        <th class="text-right">
                          <label
                            for="modal-detail"
                            class="btn btn-primary modal-button btn-xs"
                            @click="detail_create()"
                            >+ new
                          </label>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        class="hover"
                        v-for="(row, index) in detail.rows"
                        :key="index"
                      >
                        <th>
                          <div class="flex items-center space-x-3">
                            <div class="avatar">
                              <div class="mask mask-squircle w-12 h-12">
                                <!-- <img v-if="image.length>0" :src="`${image[0].temp?tmpsLink:imageLink}${image[0].file}`" :alt="`${image[0].file}`" /> -->

                                <img
                                  v-if="row.image.length > 0"
                                  :src="`${
                                    row.image[row.master ? row.master : 0].temp
                                      ? tmpsLink
                                      : row.imageLink
                                      ? row.imageLink
                                      : tmpsLink
                                  }${
                                    row.image[row.master ? row.master : 0].file
                                  }`"
                                  alt="Image"
                                />
                              </div>
                            </div>
                            <!-- <div>
                              <div class="font-bold">Hart Hagerty</div>
                              <div class="text-sm opacity-50">
                                United States
                              </div>
                            </div> -->
                          </div>
                        </th>
                        <td>
                          <div class="flex items-center space-x-3">
                            <!-- <div class="avatar">
                              <div class="mask mask-squircle w-12 h-12">
                                <img
                                  src="../assets/logo.png"
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </div>
                            </div> -->
                            <div>
                              <div class="font-bold">{{ row.title }}</div>
                              <div class="text-sm opacity-50">
                                {{ row.code }}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="avatar" v-if="row.color == '1'">
                            <div
                              class="
                                bg-neutral-focus
                                text-neutral-content
                                rounded-full
                                w-6
                              "
                              :style="{ background: row.color_code }"
                            >
                              <!-- <span class="text-xs"></span> -->
                            </div>
                          </div>
                          <!-- <button class="btn">sdaasd</button>{{ row.color_code }} -->
                          <!-- Zemlak, Daniel and Leannon -->
                          <!-- <br /> -->

                          <!-- <span class="badge badge-ghost badge-sm"
                            >Desktop Support Technician</span
                          > -->
                        </td>
                        <td>{{ row.price }}</td>
                        <td>
                          <a :href="row.link" target="_blank">
                            <font-awesome-icon
                              v-if="row.link"
                              icon="fa-solid fa-globe"
                              size="1x"
                              class="btn btn-ghost modal-button btn-xs"
                          /></a>
                        </td>
                        <th class="text-right">
                          <!-- <button class="btn btn-ghost btn-xs">details</button> -->
                          <label
                            for="modal-detail"
                            class="btn btn-ghost modal-button btn-xs"
                            @click="detail_edit(`${row.id}`, `${index}`)"
                            >edit
                          </label>
                          |
                          <label
                            for="modal-remove"
                            class="btn btn-ghost modal-button btn-xs"
                            @click="remove_item(`${row.id}`, 'detail')"
                            >remove
                          </label>
                          <!-- <button class="btn btn-ghost btn-xs">edit</button>
                          <button class="btn btn-ghost btn-xs">remove</button> -->
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              class="backdrop-blur sticky top-0 items-center gap-2 px-4 flex"
            >
              <div class="flex-1 form-control mt-6">
                <label for="modal-product" class="btn btn-danger">Cancle</label>
              </div>
              <div class="flex-1 form-control mt-6" @click="product_save()">
                <button class="btn btn-primary">Confirm</button>
              </div>
            </div>
          </div>
        </div>
        <!-- modal remove -->
        <input
          type="checkbox"
          id="modal-remove"
          class="modal-toggle"
          v-model="remove.modal"
        />
        <div class="modal">
          <div class="modal-box relative">
            <label
              for="modal-remove"
              class="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 class="text-lg font-bold">Remove Item!</h3>
            <div class="card-body overflow-auto" style="max-height: 60vh">
              Are your sure for remove this item?
            </div>

            <div
              class="backdrop-blur sticky top-0 items-center gap-2 px-4 flex"
            >
              <div class="flex-1 form-control mt-6">
                <!-- <button class="btn btn-danger"> -->
                <label for="modal-remove" class="btn btn-danger">Cancle</label>
                <!-- </button> -->
              </div>
              <div class="flex-1 form-control mt-6">
                <button class="btn btn-primary" @click="confirm_remove()">
                  Confirm
                </button>
              </div>
              <!-- <a
                href="/"
                aria-current="page"
                aria-label="Homepage"
                class="flex-0 btn btn-ghost px-2"
                >
                <div
                  class="
                    font-title
                    text-primary
                    inline-flex
                    text-lg
                    transition-all
                    duration-200
                    md:text-3xl
                  "
                >
                  <span class="lowercase">admin</span
                  ><span class="text-base-content uppercase">UI</span>
                </div>
              </a> -->
              <!-- <a
                href="/#"
                class="
                  flex-1
                  link link-hover
                  font-mono
                  text-xs text-opacity-50 text-right
                "
                ><div data-tip="Changelog" class="tooltip tooltip-bottom">
                  Anyi@0.00.1
                </div>
                </a
              > -->
            </div>

            <!-- </div> -->
          </div>
        </div>
        <!-- modal detail -->
        <input
          type="checkbox"
          id="modal-detail"
          class="modal-toggle"
          v-model="detail.modal"
        />
        <div class="modal" v-if="detail.modal">
          <div class="modal-box relative">
            <label
              for="modal-detail"
              class="btn btn-sm btn-circle absolute right-2 top-2"
              >✕</label
            >
            <h3 class="text-lg font-bold">Add Quantity!</h3>
            <!-- <p class="py-4">
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p> -->
            <!-- <div class="card flex-shrink-0 w-full  shadow-2xl bg-base-100"> -->
            <div class="card-body overflow-auto" style="max-height: 60vh">
              <div class="form-control">
                <UploadModule
                  v-if="detail.modal"
                  :imageLink="detail.form.imageLink"
                  :image="detail.form.image"
                  :multiple="true"
                  :id="'detail'"
                  @respone="
                    (res) => {
                      let length = detail.form.image.length
                        ? detail.form.image.length
                        : 0;
                      detail.form.image = detail.form.image.concat(res.image);
                    }
                  "
                  @resetdata="
                    (res) => {
                      detail.form.image = [...res.image];
                    }
                  "
                />
                <label class="label">
                  <span class="label-text text-red-500"></span>
                  <span class="label-text-alt text-red-500 font-bold"
                    >* รูปนี้จะแสดงผลในช่องรายละเอียดสินค้า</span
                  >
                </label>
              </div>

              <div class="form-control">
                <label class="label">
                  <span class="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Title or name"
                  class="input input-bordered"
                  v-model="detail.form.title"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Code</span>
                </label>

                <input
                  type="text"
                  placeholder="Code"
                  class="input input-bordered"
                  v-model="detail.form.code"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Shoping Link</span>
                </label>

                <input
                  type="text"
                  placeholder="Shoping Link"
                  class="input input-bordered"
                  v-model="detail.form.link"
                />
              </div>
              <!-- <div class="form-control">
                <label class="label">
                  <span class="label-text">Quantity</span>
                </label>
                <input
                  type="text"
                  placeholder="Quantity"
                  class="input input-bordered"
                />
              </div> -->
              <div class="grid gap-4 md:grid-cols-2 grid-cols-1">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Price"
                    class="input input-bordered"
                    v-model="detail.form.price"
                  />
                </div>
                <div class="form-control">
                  <div class="grid gap-4 md:grid-cols-2 grid-cols-1">
                    <div>
                      <label class="label">
                        <span class="label-text">Color</span>
                      </label>
                      <input
                        type="checkbox"
                        class="toggle"
                        v-model="detail.form.color"
                      />
                    </div>
                    <div>
                      <label class="label">
                        <span class="label-text">Color Picker</span>
                      </label>
                      <input
                        :disabled="detail.form.color == '0' ? true : false"
                        type="color"
                        placeholder="Color"
                        class="input input-bordered"
                        style="width: -webkit-fill-available"
                        v-model="detail.form.color_code"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <!-- <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" class="input input-bordered" />
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div> -->
            </div>

            <div
              class="backdrop-blur sticky top-0 items-center gap-2 px-4 flex"
            >
              <div class="flex-1 form-control mt-6">
                <label for="modal-detail" class="btn btn-danger">Cancle</label>
                <!-- <button class="btn btn-danger">Cancle</button> -->
              </div>
              <div class="flex-1 form-control mt-6">
                <button class="btn btn-primary" @click="detail_save('static')">
                  Confirm
                </button>
              </div>
              <!-- <a
                href="/"
                aria-current="page"
                aria-label="Homepage"
                class="flex-0 btn btn-ghost px-2"
                >
                <div
                  class="
                    font-title
                    text-primary
                    inline-flex
                    text-lg
                    transition-all
                    duration-200
                    md:text-3xl
                  "
                >
                  <span class="lowercase">admin</span
                  ><span class="text-base-content uppercase">UI</span>
                </div>
              </a> -->
              <!-- <a
                href="/#"
                class="
                  flex-1
                  link link-hover
                  font-mono
                  text-xs text-opacity-50 text-right
                "
                ><div data-tip="Changelog" class="tooltip tooltip-bottom">
                  Anyi@0.00.1
                </div>
                </a
              > -->
            </div>

            <!-- </div> -->
          </div>
        </div>
      </template>
      <template #view>
        <div
          class="grid grid-cols-4 gap-6 lg:px-10 lg:pt-5 lg:pb-0 xl:grid-cols-4"
        >
          <div class="card col-span-4 row-span-4 shadow-lg bg-base-100">
            <div class="card-body py-0">
              <h2 class="my-4 text-4xl font-bold card-title">
                <div class="flex-0"></div>
                <div class="flex-0">
                  <input
                    type="text"
                    placeholder="Search"
                    class="input input-ghost w-full max-w-xs"
                    @input="product_search"
                    v-model="product.q"
                  />
                </div>
                <div
                  class="flex-1 justify-end space-x-2 card-actions float-right"
                >
                  <!-- <button class="btn btn-primary">Create</button> -->
                  <label
                    for="modal-product"
                    class="btn btn-primary modal-button"
                    @click="product_create()"
                    >Create</label
                  >
                </div>
              </h2>
            </div>
          </div>
          <div class="card col-span-4 row-span-4 shadow-lg bg-base-100">
            <div class="card-body overflow-auto" style="max-height: 70vh">
              <div class="overflow-x-auto w-full">
                <table class="table table-normal w-full">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Category</th>
                      <!-- <th>Price</th> -->
                      <th class="text-right"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      class="hover"
                      v-for="(row, index) in product.rows"
                      :key="row.id"
                    >
                      <!-- <th>
                        <div class="flex items-center space-x-3">
                          <div class="avatar">
                            <div class="mask mask-squircle w-12 h-12">
                              <img
                                src="../assets/logo.png"
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </div>
                      </th> -->
                      <th>
                        <div class="flex items-center space-x-3">
                          <!-- {{row.image[0]}} -->
                          <div class="avatar">
                            <div class="mask mask-squircle w-12 h-12">
                              <img
                                v-if="row.image.length > 0"
                                :src="`${row.imageLink}${
                                  row.image[row.master ? row.master : 0].file
                                }`"
                                alt="Image"
                              />
                            </div>
                          </div>
                          <!-- <div>
                              <div class="font-bold">Hart Hagerty</div>
                              <div class="text-sm opacity-50">
                                United States
                              </div>
                            </div> -->
                        </div>
                      </th>
                      <td>
                        <div class="flex items-center space-x-3">
                          <div>
                            <div class="font-bold">{{ row.name }}</div>
                            <div class="text-sm opacity-50">
                              store : {{ row.storeTitle }}
                            </div>
                            <div class="text-sm opacity-50">
                              number : {{ row.number }}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="crop">
                       {{ row.description }}
                        <br />
                        <span class="badge badge-ghost badge-sm"
                          >size : {{ row.size }}</span
                        >
                      </td>
                      <td>
                        {{ row.catTitle }}
                        <br />
                        <span
                          v-if="row.recommend == '1'"
                          class="badge badge-error badge-sm"
                        >
                          สินค้าแนะนำ
                          <!-- {{ row.recommend == "1" ? "สินค้าแนะนำ" : "-" }} -->
                        </span>
                      </td>

                      <!-- <td>Purple</td> -->
                      <th class="text-right">
                        <label
                          for="modal-product"
                          class="btn btn-ghost modal-button btn-xs"
                          @click="product_edit(`${row.id}`, `${index}`)"
                          >edit
                        </label>
                        |
                        <label
                          for="modal-remove"
                          class="btn btn-ghost modal-button btn-xs"
                          @click="remove_item(`${row.id}`, 'product')"
                          >remove
                        </label>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <PageinationModule
            :page="product.page"
            :total="product.total"
            :row="product.row"
            :back="product.back"
            :next="product.next"
            :loading="product.loading"
            @search="
              (res) => {
                product.page = res.page;
                this.product_search();
              }
            "
          />
        </div>
      </template>
    </MemberLayout>
  </div>
</template>
<style>
.crop { white-space: nowrap; text-overflow:ellipsis; overflow: hidden; max-width:1px; }
</style>
<script>
// @ is an alias to /src
import MemberLayout from "@/components/layouts/Member.vue";
import UploadModule from "@/components/module/Upload.vue";
import PageinationModule from "@/components/module/Pageination.vue";

export default {
  name: "Product",
  components: {
    MemberLayout,
    UploadModule,
    PageinationModule,
  },
  data() {
    return {
      tmpsLink: "",
      category: {
        rows: [],
        page: 1,
        row: 9999,
        q: "",
      },
      store: {
        rows: [],
        page: 1,
        row: 9999,
        q: "",
      },
      product: {
        rows: [],
        total: 0,
        page: 1,
        row: 20,
        q: "",
        next: false,
        back: false,
        loading: false,
        modal: false,
        form: {
          name: "",
          number: "",
          size: "",
          description: "",
          category_id: "0",
          store_id: "0",
          recommend: "",
          room: "",
          imageLink: "",
          image: [],
        },
      },
      detail: {
        controll: "",
        rows: [],
        page: 1,
        row: 99999,
        modal: false,
        form: {
          code: "",
          title: "",
          price: "",

          imageLink: "",
          image: [],
          color: "",
          color_code: "",
          link: "",
        },
      },
      remove: {
        current: 0,
        model: false,
        controll: "",
      },
    };
  },
  computed: {
    ServiceUrl() {
      return this.$store.getters.serviceUrl;
    },
  },
  methods: {
    // CATEGORY
    category_search() {
      this.category_get((res) => {
        this.category.rows = res;
      });
    },
    category_get(callback) {
      // console.log(this.product.q)
      fetch(
        `${this.$store.state.serviceUrl}category?page=${this.category.page}${
          this.category.row ? `&rows=${this.category.row}` : ""
        }${this.category.q ? `&q=${this.category.q}` : ""}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          // body: JSON.stringify({
          //     "uuid": localStorage.getItem('uuid'),
          // }),
        }
      )
        .then((response) => response.json())
        .then((res) => {
          callback(res.success ? res.rows : []);
        })
        .catch((error) => {
          callback([]);
          console.error("Error:", error);
        });
    },
    // STORE
    store_search() {
      this.store_get((res) => {
        this.store.rows = res;
      });
    },
    store_get(callback) {
      // console.log(this.product.q)
      fetch(
        `${this.$store.state.serviceUrl}store?page=${this.store.page}${
          this.store.row ? `&rows=${this.store.row}` : ""
        }${this.store.q ? `&q=${this.store.q}` : ""}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          // body: JSON.stringify({
          //     "uuid": localStorage.getItem('uuid'),
          // }),
        }
      )
        .then((response) => response.json())
        .then((res) => {
          callback(res.success ? res.rows : []);
        })
        .catch((error) => {
          callback([]);
          console.error("Error:", error);
        });
    },
    // PRODUCT
    product_search() {
      this.product.loading = true;
      this.product_get((res) => {
        this.product.rows = res.rows;
        this.product.total = res.total;
        // console.log(this.product.page*this.product.row)

        // console.log(this.product.total)
        this.product.next =
          this.product.page * this.product.row >= this.product.total
            ? false
            : true;
        this.product.back = this.product.page > 1 ? true : false;

        this.product.loading = false;
      });
    },
    product_get(callback) {
      // console.log(this.product.q)
      fetch(
        `${this.$store.state.serviceUrl}product?page=${this.product.page}${
          this.product.row ? `&rows=${this.product.row}` : ""
        }${this.product.q ? `&q=${this.product.q}` : ""}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          // body: JSON.stringify({
          //     "uuid": localStorage.getItem('uuid'),
          // }),
        }
      )
        .then((response) => response.json())
        .then((res) => {
          if (res.rows.length > 0) {
            // res.rows[0].image = res.rows[0].image
            //   ? JSON.parse(res.rows[0].image)
            //   : [];
            // res.rows[0].master = 0;
            res.rows.forEach((v, i) => {
              res.rows[i].image = v.image ? JSON.parse(v.image) : [];
              // console.log(res.rows[i].image)
              // res.rows[i].image.forEach((vv, ii) => {
              // if (ii == 0) {
              res.rows[i].master = 0;
              // }
              // console.log(vv);
              // if (vv.master) {
              //   res.rows[i].master = ii;
              // }
              // });
            });
          }
          callback(
            res.success
              ? { rows: res.rows, total: res.total }
              : { rows: [], total: 0 }
          );
        })
        .catch((error) => {
          callback([]);
          console.error("Error:", error);
        });
    },
    product_create() {
      // console.log("CREATE");
      this.product.current = 0;
      this.detail.rows = [];
      this.category_search();
      this.store_search();
      this.product.form = {
        name: "",
        size: "",
        number: "",
        description: "",
        store_id: "0",
        category_id: "0",
        recommend: "",
        room: "",
        imageLink: "",
        image: [],
      };
      this.product.controll = "create";
    },
    product_edit(id, index) {
      this.category_search();
      this.store_search();
      // console.log(id,index);
      this.product.form = { ...this.product.rows[index] };
      this.product.form.category_id = this.product.form.category_id
        ? this.product.form.category_id
        : "0";
      this.product.form.store_id = this.product.form.store_id
        ? this.product.form.store_id
        : "0";
      this.product.form.recommend =
        this.product.form.recommend == "1" ? true : false;
      //  this.product.form.store_id = this.product.form.store_id == "0" ? false : true;

      //  this.product.rows[index]["category_id"] = ? this.product.rows[index]["category_id"]
      //     : "0",
      // store_id: this.product.rows[index]["store_id"]
      //   ? this.product.rows[index]["store_id"]
      //   : "0",
      // recommend: this.product.rows[index]["recommend"] == "1" ? true : false,
      // this.product.form = this.product.rows[index]
      this.product.current = id;
      this.detail_search();
      this.product.controll = "edit";
    },
    product_save() {
      let image = { ...this.product.form.image[0] };
      delete image.temp;

      console.log(image)
      let vm = this;
      fetch(`${this.$store.state.serviceUrl}product`, {
        method: this.product.controll == "create" ? "POST" : "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: this.product.current,
          name: this.product.form.name,
          size: this.product.form.size,
          number: this.product.form.number,
          description: this.product.form.description,
          category_id: this.product.form.category_id,
          store_id: this.product.form.store_id,
          recommend: this.product.form.recommend,
          room: this.product.form.room,
          image: [image],
        }),
      })
        .then((response) => response.json())
        .then((res) => {
          if (res.success) {
            this.product.modal = false;
            const promise_arr = [];
            console.log(this.product.current);
            if (this.product.current == 0) {
              this.product.current = res.row.id;
              let i = this.detail.rows.length;
              // console.log(i)
              this.detail.controll = "create";
              for (i; i > 0; i--) {
                // this.detail.rows.forEach((v, i) => {
                // console.log(v, i);

                this.detail.form = {
                  code: this.detail.rows[i - 1]["code"],
                  title: this.detail.rows[i - 1]["title"],
                  price: this.detail.rows[i - 1]["price"],
                  image: this.detail.rows[i - 1]["image"],
                  // imageLink: this.detail.rows[i - 1]["imageLink"],
                  color: this.detail.rows[i - 1]["color"],
                  color_code: this.detail.rows[i - 1]["color_code"],
                  link: this.detail.rows[i - 1]["link"],
                };

                promise_arr.push(
                  new Promise(async function (resolve, reject) {
                    let res = await vm.detail_save("dynamic");
                    await resolve(res);
                    return;
                    // setTimeout(function(){ resolve("☕") },700);
                  })
                );

                // });
              }
            }

            Promise.all(promise_arr)
              .then((res) => {
                // console.log(res);
                vm.product_search();
              })
              .catch((err) => console.error(err));
          }
          // callback(res.success ? res.rows : []);
        })
        .catch((error) => {
          // callback([]);
          console.error("Error:", error);
        });
    },
    // DETAIL
    detail_search() {
      this.detail_get((res) => {
        this.detail.rows = res;
      });
    },
    detail_get(callback) {
      fetch(
        `${this.$store.state.serviceUrl}detail?product_id=${
          this.product.current
        }&page=${this.detail.page}${
          this.detail.row ? `&rows=${this.detail.row}` : ""
        }${this.detail.q ? `&q=${this.detail.q}` : ""}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          // body: JSON.stringify({
          //     "uuid": localStorage.getItem('uuid'),
          // }),
        }
      )
        .then((response) => response.json())
        .then((res) => {
          res.rows.forEach((v, i) => {
            res.rows[i].image = v.image ? JSON.parse(v.image) : [];
            // console.log(res.rows[i].image)
            res.rows[i].image.forEach((vv, ii) => {
              if (ii == 0) {
                res.rows[i].master = ii;
              }
              // console.log(vv);
              if (vv.master) {
                res.rows[i].master = ii;
              }
            });
          });
          callback(res.success ? res.rows : []);
        })
        .catch((error) => {
          callback([]);
          console.error("Error:", error);
        });
    },
    detail_create() {
      console.log("detail_create");
      // this.clearimage();
      this.detail.current = 0;
      console.log("callback");
      // this.detail.rows = [];
      this.detail.form = {
        code: "",
        title: "",
        price: "",
        image: [],
        imageLink: "",
        color: "",
        color_code: "",
        link: "",
      };
      this.detail.controll = "create";
    },
    detail_edit(id, index) {
      // console.log("detail_edit");
      // this.clearimage();
      // console.log(id,index);
      // setTimeout(() => {
      this.detail.current = id;
      this.detail.form = Object.assign({}, this.detail.rows[index]);
      this.detail.form.color = this.detail.form.color == "0" ? false : true;

      // console.log(this.detail.form.image);
      this.detail.form.image.forEach((v, i) => {
        // console.log(v);
        this.detail.form.image[i] = Object.assign(
          {},
          this.detail.form.image[i]
        );
      });

      // console.log(this.detail.form);
      // this.detail.form.image = JSON.parse(this.detail.form.image)

      // }, 5000);

      // this.product.form = this.product.rows[index]
      this.detail.current = id;
      // this.detail_search();

      this.detail.controll = "edit";
    },
    detail_save(type) {
      if (!this.product.current) {
        if (this.detail.controll == "create") {
          this.detail.form.id = this.detail.rows.length;
          this.detail.rows = [{ ...this.detail.form }].concat(this.detail.rows);
          // this.detail.rows.push({ ...this.detail.form });
          this.detail.modal = false;
        } else {
          //  this.detail.form.id = this.detail.rows.length
          let index = this.detail.rows.findIndex(
            (v) => v.id == this.detail.current
          );
          this.detail.rows[index] = { ...this.detail.form };

          // this.detail.rows.push({ ...this.detail.form });
          this.detail.modal = false;
        }
      } else {
        console.table(this.detail.form.image);
        let array_image = [];
        this.detail.form.image.forEach((v, i) => {
          console.log(v);
          if (v.temp) {
            let image = { ...v };
            delete image.temp;
            array_image[i] = image;
          } else {
            array_image[i] = { ...v };
          }
          // console.log(this.detail.form.image[i])
        });
        //  console.table(this.detail.form.image);
        let obj = {
          product_id: this.product.current,
          code: this.detail.form.code,
          title: this.detail.form.title,
          price: this.detail.form.price,
          image: array_image,
          color: this.detail.form.color,
          color_code: this.detail.form.color_code,
          link: this.detail.form.link,
        };
        console.log(obj);
        if (this.detail.controll == "edit") {
          obj["id"] = this.detail.form.id;
        }
        fetch(`${this.$store.state.serviceUrl}detail`, {
          method: this.detail.controll == "create" ? "POST" : "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        })
          .then((response) => response.json())
          .then((res) => {
            if (res.success) {
              this.detail.modal = false;

              if (type == "static") {
                this.detail_search();
              }

              // this.product_search();
            }
            // callback(res.success ? res.rows : []);
          })
          .catch((error) => {
            callback([]);
            console.error("Error:", error);
          });
      }
    },
    // REMOVE
    remove_item(id, controll) {
      console.log(id);
      this.remove.id = id;
      this.remove.controll = controll;
    },
    confirm_remove() {
      if (this.remove.controll != "product" && this.product.current == 0) {
        console.log(this.remove.id);
        let index = this.detail.rows.findIndex((v) => v.id == this.remove.id);
        console.log(index);
        console.log(this.detail.rows);
        this.detail.rows.splice(index, 1);
        this.remove.modal = false;
      } else {
        fetch(`${this.$store.state.serviceUrl}${this.remove.controll}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: this.remove.id,
          }),
        })
          .then((response) => response.json())
          .then((res) => {
            if (res.success) {
              // console.log(res);
              this.remove.modal = false;
              this[`${this.remove.controll}_search`]();
            }
            // callback(res.success ? res.rows : []);
          })
          .catch((error) => {
            // callback([]);
            console.error("Error:", error);
          });
      }
    },
  },
  mounted() {
    this.product_search();
    //  mounted() {
    this.tmpsLink = `${
      window.location.origin == "http://localhost:8080"
        ? `http://localhost/sacit_virtual/`
        : `https://sacitvrshop.com/`
    }tmps/`;
    // },
  },
};
</script>
