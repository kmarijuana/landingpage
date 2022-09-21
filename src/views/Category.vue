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
                <!-- <UploadModule
                  :imageLink="category.form.imageLink"
                  :image="category.form.image"
                  @respone="
                    (res) => {
                      category.form.imageLink = res.imageLink;
                      category.form.image = res.image;
                    }
                  "
                /> -->
                <UploadModule
                  :imageLink="category.form.imageLink"
                  :image="category.form.image"
                  :multiple="false"
                  @respone="
                    (res) => {
                      let length = category.form.image.length
                        ? category.form.image.length
                        : 0;
                      category.form.image = category.form.image.concat(
                        res.image
                      );
                    }
                  "
                  @resetdata="
                    (res) => {
                      category.form.image = [...res.image];
                    }
                  "
                />
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
        <RemoveModule
          :controll="remove.controll"
          :id="remove.id"
          @response="
            (res) => {
              this[`${remove.controll}_search`]();
            }
          "
        />
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
                                v-if="row.image.length > 0"
                                :src="`${row.imageLink}${
                                  row.image[row.master].file
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
                            <div class="font-bold">{{ row.title }}</div>
                            <!-- <div class="text-sm opacity-50">
                              store : {{ row.storeTitle }}
                            </div> -->
                          </div>
                        </div>
                      </td>

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
          <PageinationModule
            :page="category.page"
            :total="category.total"
            :row="category.row"
            :back="category.back"
            :next="category.next"
            :loading="category.loading"
            @search="
              (res) => {
                category.page = res.page;
                this.category_search();
              }
            "
          />
        </div>
      </template>
    </MemberLayout>
  </div>
</template>

<script>
// @ is an alias to /src
import MemberLayout from "@/components/layouts/Member.vue";
import UploadModule from "@/components/module/Upload.vue";
import PageinationModule from "@/components/module/Pageination.vue";
import RemoveModule from "@/components/module/Remove.vue";

export default {
  name: "Category",
  components: {
    MemberLayout,
    UploadModule,
    PageinationModule,
    RemoveModule,
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
          imageLink: "",
          image: [],
        },
        controll: "",
      },
      remove: {
        current: 0,
        // modal: false,
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
    category_search() {
      this.category.loading = true;
      this.category_get((res) => {
        this.category.rows = res.rows;
        this.category.total = res.total;
        // console.log(this.category.page*this.category.row)

        // console.log(this.category.total)
        this.category.next =
          this.category.page * this.category.row >= this.category.total
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
          // if (res.rows.length > 0) {
          //   res.rows[0].image = res.rows[0].image
          //     ? JSON.parse(res.rows[0].image)
          //     : [];
          //   res.rows[0].master = 0;
          // }
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
        imageLink: "",
        image: [],
      };
      this.category.controll = "create";
    },
    category_edit(id, index) {
      this.category.form = { ...this.category.rows[index] };
      this.category.current = id;
      this.category.controll = "edit";
    },
    category_save() {
      // let image = {};
      // this.detail.form.image.forEach((v, i) => {
      // console.log(v)
      // if (v.temp) {
      let image = { ...this.category.form.image[0] };
      delete image.temp;
      // array_image[i] = image;
      // } else {
      //   array_image[i] = { ...v };
      // }
      // console.log(this.detail.form.image[i])
      // });
      console.log(image.length)
      fetch(`${this.$store.state.serviceUrl}category`, {
        method: this.category.controll == "create" ? "POST" : "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: this.category.current,
          title: this.category.form.title,
          image: [image],
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
      this.remove.id = id;
      this.remove.controll = controll;
      // this.remove.modal = true
    },
    // confirm_remove() {
    //   fetch(`${this.$store.state.serviceUrl}${this.remove.controll}`, {
    //     method: "DELETE",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       id: this.remove.id,
    //     }),
    //   })
    //     .then((response) => response.json())
    //     .then((res) => {
    //       if (res.success) {
    //         // console.log(res);
    //         this.remove.modal = false;
    //         this[`${this.remove.controll}_search`]();
    //       }
    //       // callback(res.success ? res.rows : []);
    //     })
    //     .catch((error) => {
    //       // callback([]);
    //       console.error("Error:", error);
    //     });
    // },
  },
  mounted() {
    this.category_search();
  },
};
</script>
