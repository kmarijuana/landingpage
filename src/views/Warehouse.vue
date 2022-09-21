<template>
  <div class="Product">
    <MemberLayout>
      <template #modal>
        <input type="checkbox" id="modal-product" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box relative">
            <label
              for="modal-product"
              class="btn btn-sm btn-circle absolute right-2 top-2"
              >✕</label
            >
            <h3 class="text-lg font-bold">Add new product!</h3>
            <!-- <p class="py-4">
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p> -->
            <!-- <div class="card flex-shrink-0 w-full  shadow-2xl bg-base-100"> -->
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Product title</span>
                </label>
                <input
                  type="text"
                  placeholder="Title or name"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Description</span>
                </label>
                <input
                  type="text"
                  placeholder="Description"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <div class="overflow-x-auto w-full">
                  <table class="table table-compact w-full">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th class="text-right"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="hover" v-for="index in 3" :key="index">
                        <th>
                          <div class="flex items-center space-x-3">
                            <div class="avatar">
                              <div class="mask mask-squircle w-12 h-12">
                                <img
                                  src="../assets/logo.png"
                                  alt="Avatar Tailwind CSS Component"
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
                              <div class="font-bold">Hart Hagerty</div>
                              <div class="text-sm opacity-50">
                                United States
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          Zemlak, Daniel and Leannon
                          <br />
                          <span class="badge badge-ghost badge-sm"
                            >Desktop Support Technician</span
                          >
                        </td>
                        <td>Purple</td>
                        <th class="text-right">
                          <!-- <button class="btn btn-ghost btn-xs">details</button> -->
                          <button class="btn btn-ghost btn-xs">edit</button> |
                          <button class="btn btn-ghost btn-xs">remove</button>
                        </th>
                      </tr>
                    </tbody>
                  </table>
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

              <div class="form-control mt-6">
                <button class="btn btn-primary">Confirm</button>
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-danger">Cancle</button>
              </div>
            </div>
            <!-- </div> -->
          </div>
        </div>
      </template>
      <template #view>
        <div class="grid grid-cols-4 gap-6 lg:p-10 xl:grid-cols-4">
          <div class="card col-span-4 row-span-4 shadow-lg bg-base-100">
            <div class="card-body py-0">
              <h2 class="my-4 text-4xl font-bold card-title">
                <div class="flex-0"></div>
                <div class="flex-0">
                  <input
                    type="text"
                    placeholder="Search"
                    class="input input-ghost w-full max-w-xs"
                  />
                </div>
                <div
                  class="flex-1 justify-end space-x-2 card-actions float-right"
                >
                  <!-- <button class="btn btn-primary">Create</button> -->
                  <label
                    for="modal-product"
                    class="btn btn-primary modal-button"
                    >Create</label
                  >
                </div>
              </h2>
            </div>
          </div>
          <div class="card col-span-4 row-span-4 shadow-lg bg-base-100">
            <div class="card-body">
              <div class="overflow-x-auto w-full">
                <table class="table table-normal w-full">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Price</th>
                      <th class="text-right"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="hover" v-for="index in 10" :key="index">
                      <th>
                        <div class="flex items-center space-x-3">
                          <div class="avatar">
                            <div class="mask mask-squircle w-12 h-12">
                              <img
                                src="../assets/logo.png"
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <!-- <div>
                            <div class="font-bold">Hart Hagerty</div>
                            <div class="text-sm opacity-50">United States</div>
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
                            <div class="font-bold">Hart Hagerty</div>
                            <div class="text-sm opacity-50">United States</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        Zemlak, Daniel and Leannon
                        <br />
                        <span class="badge badge-ghost badge-sm"
                          >Desktop Support Technician</span
                        >
                      </td>
                      <td>Purple</td>
                      <th class="text-right">
                        <!-- <button class="btn btn-ghost btn-xs">details</button> -->
                        <button class="btn btn-ghost btn-xs">edit</button> |
                        <button class="btn btn-ghost btn-xs">remove</button>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      </template>
    </MemberLayout>
  </div>
</template>

<script>
// @ is an alias to /src
import MemberLayout from "@/components/layouts/Member.vue";

export default {
  name: "Product",
  components: {
    MemberLayout,
  },
};
</script>
