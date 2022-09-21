<template>
  <div class="Category">
    <MemberLayout>
      <template #modal>
        <!-- modal category -->
        <input
          type="checkbox"
          id="modal-category"
          class="modal-toggle"
          v-model="category.modal"
        />
        <div class="modal">
          <div class="modal-box relative">
            <label
              for="modal-category"
              class="btn btn-sm btn-circle absolute right-2 top-2"
              >✕
            </label>
            <h3 class="text-lg font-bold">Add new category!</h3>
            <div class="card-body overflow-auto" style="max-height: 60vh">
              <div class="form-control">
                <div class="flex items-center justify-center w-full">
                  <label
                    :class="category.upload.show ? '' : 'hidden'"
                    for="dropzone-file"
                    class="
                      flex flex-col
                      items-center
                      justify-center
                      w-full
                      min-h-min
                      border-2 border-dashed
                      rounded-lg
                      cursor-pointer
                      bg-base-100
                      dark:hover:bg-base-200 dark:bg-base-100
                      hover:bg-gray-100
                      dark:border-base-200 dark:hover:border-base-100
                    "
                  >
                    <div
                      class="
                        flex flex-col
                        items-center
                        justify-center
                        pt-5
                        pb-6
                      "
                    >
                      <svg
                        class="w-10 h-10 mb-3 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">Click to upload</span> or
                        drag and drop
                      </p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">
                        PNG, JPG or GIF
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      class="hidden"
                      @change="change('quantity')"
                      ref="uploadimage"
                    />
                  </label>
                  <label
                    :class="category.upload.show ? 'hidden' : ''"
                    class="
                      flex flex-col
                      items-center
                      justify-center
                      w-full
                      min-h-min
                      border-2 border-gray-300 border-dashed
                      rounded-lg
                      cursor-pointer
                      bg-base-100
                    "
                  >
                    <img
                      v-if="category.form.imageLink"
                      :src="`${category.form.imageLink}`"
                      :alt="`${category.form.image}`"
                    />
                  </label>
                </div>
                <div
                  class="flex bg-base-300 p-0 mt-2"
                  style="border-radius: 20px"
                >
                  <div class="flex-1">
                    <label class="mx-3">
                      {{ category.form.image }}
                    </label>
                  </div>
                  <div class="flex-none">
                    <button
                      :disabled="category.upload.show ? true : false"
                      @click="clearimage()"
                      class="btn btn-sm btn-circle right-2 top-2 flex-none"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Title"
                  class="input input-bordered"
                  v-model="category.form.title"
                />
              </div>
            </div>

            <div
              class="backdrop-blur sticky top-0 items-center gap-2 px-4 flex"
            >
              <div class="flex-1 form-control mt-6">
                <label for="modal-category" class="btn btn-danger"
                  >Cancle</label
                >
              </div>
              <div class="flex-1 form-control mt-6" @click="category_save()">
                <button class="btn btn-primary">Confirm</button>
              </div>
            </div>
          </div>
        </div>
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
                    @input="category_search"
                    v-model="category.q"
                  />
                </div>
                <div
                  class="flex-1 justify-end space-x-2 card-actions float-right"
                >
                  <label
                    for="modal-category"
                    class="btn btn-primary modal-button"
                    @click="category_create()"
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
                      <th>Logo</th>
                      <th>Title</th>
                      <!-- <th>Description</th> -->
                      <!-- <th>Category</th> -->
                      <th class="text-right"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      class="hover"
                      v-for="(row, index) in category.rows"
                      :key="row.id"
                    >
                      <th>
                        <div class="flex items-center space-x-3">
                          <div class="avatar">
                            <div class="mask mask-squircle w-12 h-12">
                              <img
                                v-if="row.image"
                                :src="`${row.imageLink}`"
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
                            <div class="font-bold">{{ row.title }}</div>
                            <!-- <div class="text-sm opacity-50">
                              store : {{ row.storeTitle }}
                            </div> -->
                          </div>
                        </div>
                      </td>
                      <!-- <td>
                        {{ row.description }}
                        <br />
                        <span class="badge badge-ghost badge-sm"
                          >size : {{ row.size }}</span
                        >
                      </td>
                      <td>
                        {{ row.catTitle }}
                        <br />
                        <span class="badge badge-ghost badge-sm"
                          >recommend :
                          {{ row.recommend == "1" ? "สินค้าแนะนำ" : "-" }}</span
                        >
                      </td> -->
                      <th class="text-right">
                        <label
                          for="modal-category"
                          class="btn btn-ghost modal-button btn-xs"
                          @click="category_edit(`${row.id}`, `${index}`)"
                          >edit
                        </label>
                        |
                        <label
                          for="modal-remove"
                          class="btn btn-ghost modal-button btn-xs"
                          @click="remove_item(`${row.id}`, 'category')"
                          >remove
                        </label>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div
            class="col-span-4 row-span-4"
            v-if="category.total > category.row"
          >
            <div class="col-span-2">
              <div class="btn-group grid grid-cols-2">
                <button
                  class="btn btn-outline"
                  :disabled="!category.back || category.loading"
                  @click="category_back()"
                >
                  Previous page
                </button>
                <button
                  class="btn btn-outline"
                  :disabled="!category.next || category.loading"
                  @click="category_next()"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </template>
    </MemberLayout>
  </div>
</template>

<script>
// @ is an alias to /src
import MemberLayout from "@/components/layouts/Member.vue";
import UploadModule from "@/components/module/Upload.vue";

export default {
  name: "Category",
  components: {
    MemberLayout,
    UploadModule
  },
  data() {
    return {
      category: {
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
          title: "",
          image: "",
          imageLink: "",
        },
        controll: "",
        upload: {
          show: true,
          file: "",
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
    // Category
    category_next() {
      this.category.page++;
      this.category_search();
    },
    category_back() {
      this.category.page--;
      this.category_search();
    },
    category_search() {
      this.category.loading = true;
      this.category_get((res) => {
        this.category.rows = res.rows;
        this.category.total = res.total;
        // console.log(this.category.page*this.category.row)

        // console.log(this.category.total)
        this.category.next =
          this.category.page * this.category.row > this.category.total
            ? false
            : true;
        this.category.back = this.category.page > 1 ? true : false;

        this.category.loading = false;
      });
    },
    category_get(callback) {
      // console.log(this.category.q)
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
    category_create() {
      // console.log("CREATE");
      this.category.current = 0;
      this.category.form = {
        title: "",
        image: "",
        imageLink: "",
      };
      this.category.controll = "create";
    },
    category_edit(id, index) {
      this.category.form = { ...this.category.rows[index] };
      this.category.current = id;
      this.category.controll = "edit";
      this.category.upload.show = this.category.form.image ? false : true;
    },
    category_save() {
      fetch(`${this.$store.state.serviceUrl}category`, {
        method: this.category.controll == "create" ? "POST" : "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: this.category.current,
          title: this.category.form.title,
          image: this.category.form.image,
        }),
      })
        .then((response) => response.json())
        .then((res) => {
          if (res.success) {
            this.category.modal = false;
            console.log(this.category.current);
            this.category_search();
          }
          // callback(res.success ? res.rows : []);
        })
        .catch((error) => {
          // callback([]);
          console.error("Error:", error);
        });
    },
    // REMOVE
    remove_item(id, controll) {
      console.log(id);
      this.remove.id = id;
      this.remove.controll = controll;
    },
    confirm_remove() {
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
    },
    // IMAGE
    change(index) {
      console.log("change");
      // console.log(this.$refs.uploadimage)
      // console.log(this.$refs.uploadimage)
      // console.log(index);
      const formData = new FormData();
      const fileField = this.$refs.uploadimage;

      formData.append("userid", "1");
      formData.append("image", fileField.files[0]);

      fetch(`${this.$store.state.serviceUrl}upload`, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.upload.success) {
            this.category.upload.show = false;
            // this.detail.upload.file = `${result.log.row.current_file}.${result.log.row.ext}`;
            this.category.form.image = `${result.log.row.current_file}.${result.log.row.ext}`;
            this.category.form.imageLink = `
            ${window.location.origin == 'http://localhost:8080'?`http://localhost/sacit_virtual/`:`https://sacitvrshop.com/`}/tmps/${result.log.row.current_file}.${result.log.row.ext}`;
          }
          console.log("Success:", result);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    clearimage() {
      console.log("clearimage");
      this.category.upload.show = true;
      this.$refs.uploadimage.value = "";
      // this.category.upload.file = ``;
      this.category.form.image = ``;
      this.category.form.imageLink = ``;
      // this.category.form.image = ``;
    },
  },
  mounted() {
    this.category_search();
  },
};
</script>
