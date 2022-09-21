<template>
  <div class="Store">
    <MemberLayout>
      <template #modal>
        <!-- modal store -->
        <input
          type="checkbox"
          id="modal-store"
          class="modal-toggle"
          v-model="store.modal"
        />
        <div class="modal">
          <div class="modal-box relative">
            <label
              for="modal-store"
              class="btn btn-sm btn-circle absolute right-2 top-2"
              >✕
            </label>
            <h3 class="text-lg font-bold">Add new store!</h3>
            <div class="card-body overflow-auto" style="max-height: 60vh">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Title"
                  class="input input-bordered"
                  v-model="store.form.title"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Website</span>
                </label>
                <input
                  type="text"
                  placeholder="Website"
                  class="input input-bordered"
                  v-model="store.form.website"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Line</span>
                </label>
                <input
                  type="text"
                  placeholder="Line"
                  class="input input-bordered"
                  v-model="store.form.line"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Facebook</span>
                </label>
                <input
                  type="text"
                  placeholder="Facebook"
                  class="input input-bordered"
                  v-model="store.form.facebook"
                />
              </div>
            </div>

            <div
              class="backdrop-blur sticky top-0 items-center gap-2 px-4 flex"
            >
              <div class="flex-1 form-control mt-6">
                <label for="modal-store" class="btn btn-danger">Cancle</label>
              </div>
              <div class="flex-1 form-control mt-6" @click="store_save()">
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
                    @input="store_search"
                    v-model="store.q"
                  />
                </div>
                <div
                  class="flex-1 justify-end space-x-2 card-actions float-right"
                >
                  <label
                    for="modal-store"
                    class="btn btn-primary modal-button"
                    @click="store_create()"
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
                      <!-- <th>Logo</th> -->
                      <th>Title</th>
                      <th>Link</th>
                      <!-- <th>Description</th> -->
                      <!-- <th>Store</th> -->
                      <th class="text-right"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      class="hover"
                      v-for="(row, index) in store.rows"
                      :key="row.id"
                    >
                      <!-- <th>
                        <div class="flex items-center space-x-3">
                          <div class="avatar">
                            <div class="mask mask-squircle w-12 h-12">
                              <img
                                v-if="row.image"
                                :src="`${row.imageLink}`"
                                alt="Image"
                              />
                            </div>
                          </div> -->
                      <!-- <div>
                              <div class="font-bold">Hart Hagerty</div>
                              <div class="text-sm opacity-50">
                                United States
                              </div>
                            </div> -->
                      <!-- </div>
                      </th> -->
                      <th>
                        <div class="flex items-center space-x-3">
                          <div>
                            <div class="font-bold">{{ row.title }}</div>
                            <!-- <div class="text-sm opacity-50">
                              store : {{ row.storeTitle }}
                            </div> -->
                          </div>
                        </div>
                      </th>
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
                      <td>
                        <!-- <i class="fa-solid fa-globe fa-2x mx-2"></i> -->
                        <a :href="row.website" target="_blank">
                          <font-awesome-icon
                            v-if="row.website"
                            icon="fa-solid fa-globe"
                            size="1x"
                            class="btn btn-ghost modal-button btn-xs"
                        /></a>
                        <!-- <i class="fa-brands fa-line fa-2x mx-2"></i> -->
                        <a :href="row.line" target="_blank">
                          <font-awesome-icon
                            v-if="row.line"
                            icon="fa-brands fa-line"
                            size="1x"
                            class="btn btn-ghost modal-button btn-xs"
                        /></a>
                        <!-- <i class="fa-brands fa-facebook fa-2x mx-2"></i> -->
                        <a :href="row.line" target="_blank">
                          <font-awesome-icon
                            v-if="row.facebook"
                            icon="fa-brands fa-facebook"
                            size="1x"
                            class="btn btn-ghost modal-button btn-xs"
                        /></a>
                      </td>
                      <th class="text-right">
                        <label
                          for="modal-store"
                          class="btn btn-ghost modal-button btn-xs"
                          @click="store_edit(`${row.id}`, `${index}`)"
                          >edit
                        </label>
                        |
                        <label
                          for="modal-remove"
                          class="btn btn-ghost modal-button btn-xs"
                          @click="remove_item(`${row.id}`, 'store')"
                          >remove
                        </label>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="col-span-4 row-span-4" v-if="store.total > store.row">
            <div class="col-span-2">
              <div class="btn-group grid grid-cols-2">
                <button
                  class="btn btn-outline"
                  :disabled="!store.back || store.loading"
                  @click="store_back()"
                >
                  Previous page
                </button>
                <button
                  class="btn btn-outline"
                  :disabled="!store.next || store.loading"
                  @click="store_next()"
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

export default {
  name: "Store",
  components: {
    MemberLayout,
  },
  data() {
    return {
      store: {
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
          website: "",
          line: "",
          facebook: "",
        },
        controll: "",
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
    // Store
    store_next() {
      this.store.page++;
      this.store_search();
    },
    store_back() {
      this.store.page--;
      this.store_search();
    },
    store_search() {
      this.store.loading = true;
      this.store_get((res) => {
        this.store.rows = res.rows;
        this.store.total = res.total;
        // console.log(this.store.page*this.store.row)

        // console.log(this.store.total)
        this.store.next =
          this.store.page * this.store.row > this.store.total ? false : true;
        this.store.back = this.store.page > 1 ? true : false;

        this.store.loading = false;
      });
    },
    store_get(callback) {
      // console.log(this.store.q)
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
    store_create() {
      // console.log("CREATE");
      this.store.current = 0;
      this.store.form = {
        title: "",
        website: "",
        line: "",
        facebook: "",
      };
      this.store.controll = "create";
    },
    store_edit(id, index) {
      this.store.form = { ...this.store.rows[index] };
      this.store.current = id;
      this.store.controll = "edit";
    },
    store_save() {
      fetch(`${this.$store.state.serviceUrl}store`, {
        method: this.store.controll == "create" ? "POST" : "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: this.store.current,
          title: this.store.form.title,
          website: this.store.form.website,
          line: this.store.form.line,
          facebook: this.store.form.facebook,
        }),
      })
        .then((response) => response.json())
        .then((res) => {
          if (res.success) {
            this.store.modal = false;
            console.log(this.store.current);
            this.store_search();
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
  },
  mounted() {
    this.store_search();
  },
};
</script>
