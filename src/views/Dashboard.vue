<template>
  <div class="Dashboard">
    <MemberLayout>
      <template #modal>
        <input type="checkbox" id="modal-joinnows" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box relative">
            <button
              v-if="tab.join == 'create' || tab.join == 'forgot-password'"
              for="modal-joinnows"
              class="btn btn-sm btn-ghost absolute left-2 top-2"
              @click="tab.join = 'login'"
            >
              ←
            </button>
            <label
              for="modal-joinnows"
              class="btn btn-sm btn-ghost absolute right-2 top-2"
              @click="tab.join = 'login'"
              >✕</label
            >
            <div class="card-body pb-2" v-if="tab.join == 'login'">
              <div class="text-xl font-bold">LOG IN OR CREATE AN ACCOUNT</div>
              <div class="text-md">Log in with social</div>
              <div class="flex flex-col w-full border-opacity-50">
                <div class="grid h-20 card rounded-box place-items-center">
                  <div class="grid gap-4 md:grid-cols-2 grid-cols-1 w-full">
                    <div class="form-control">
                      <label
                        class="
                          btn btn-circle btn-xs
                          sm:btn-sm
                          md:btn-md
                          lg:btn-lg
                          bg-black
                          text-white
                          border-black
                          w-full
                        "
                        >Facebook</label
                      >
                    </div>
                    <div class="form-control">
                      <label
                        class="
                          btn btn-circle btn-xs
                          sm:btn-sm
                          md:btn-md
                          lg:btn-lg
                          bg-black
                          text-white
                          border-black
                          w-full
                        "
                        >Goolgle</label
                      >
                    </div>
                  </div>
                </div>
                <div class="divider">OR</div>

                <div class="form-control grid">
                  <!-- <label class="label">
                  <span class="label-text">Email Address*</span>
                </label> -->
                  <input
                    type="text"
                    placeholder="Email Address*"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control grid mt-4">
                  <!-- <label class="label">
                  <span class="label-text">Password*</span>
                </label> -->
                  <input
                    type="text"
                    placeholder="Password*"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control grid mt-4 mb-4">
                  <div class="flex w-full">
                    <div class="rounded-box">
                      <label class="label cursor-pointer">
                        <input
                          type="checkbox"
                          checked="checked"
                          class="checkbox"
                        />
                        <span class="label-text pl-2">Remember me</span>
                      </label>
                    </div>
                    <!-- <div class="divider divider-horizontal">OR</div> -->
                    <div class="grid flex-grow rounded-box justify-end">
                      <label class="label">
                        <a
                          href="#"
                          class="label-text-alt link link-hover font-bold"
                          @click="tab.join = 'forgot-password'"
                        >
                          Forgot password?
                        </a>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-control">
                <button
                  class="
                    btn btn-xs
                    sm:btn-sm
                    md:btn-md
                    lg:btn-lg
                    bg-black
                    text-white
                    border-black
                    w-full
                  "
                >
                  Login
                </button>
              </div>
              <div class="form-control">
                <p class="label-text-alt">
                  You don't have an account yes?
                  <a
                    href="#"
                    class="label-text-alt link link-hover font-bold"
                    @click="tab.join = 'create'"
                    >Join now!
                  </a>
                </p>

                <!-- <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-black text-white border-black w-full">Login</button> -->
              </div>
            </div>

            <!--------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------>

            <div class="card-body pb-2" v-if="tab.join == 'create'">
              <div class="text-xl font-bold">CREATE AN ACCOUNT</div>
              <div class="text-md">Please enter your details.</div>
              <div class="flex flex-col w-full border-opacity-50">
                <div class="form-control grid">
                  <!-- <label class="label">
                  <span class="label-text">Email Address*</span>
                </label> -->
                  <input
                    type="text"
                    placeholder="Email Address*"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control grid mt-4">
                  <!-- <label class="label">
                  <span class="label-text">Password*</span>
                </label> -->
                  <input
                    type="text"
                    placeholder="Password*"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control grid mt-4">
                  <!-- <label class="label">
                  <span class="label-text">Password*</span>
                </label> -->
                  <input
                    type="text"
                    placeholder="Confirm Password*"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control grid mt-4">
                  <!-- <label class="label">
                  <span class="label-text">Password*</span>
                </label> -->
                  <input
                    type="text"
                    placeholder="Firstname*"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control grid mt-4">
                  <!-- <label class="label">
                  <span class="label-text">Password*</span>
                </label> -->
                  <input
                    type="text"
                    placeholder="Lastname*"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control grid mt-4">
                  <!-- <label class="label">
                  <span class="label-text">Password*</span>
                </label> -->
                  <input
                    type="text"
                    placeholder="Mobile No."
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control grid mt-4 mb-4">
                  <div class="rounded-box">
                    <label class="label cursor-pointer">
                      <input
                        type="checkbox"
                        checked="checked"
                        class="checkbox"
                      />
                      <span class="label-text pl-2"
                        >By signing in, iagree to the
                        <a
                          href="#"
                          class="label-text-alt link link-hover font-bold"
                        >
                          Privacy Policy
                        </a>
                        |
                        <a
                          href="#"
                          class="label-text-alt link link-hover font-bold"
                        >
                          terms & Confitions.
                        </a>
                      </span>
                    </label>
                  </div>
                  <!-- <div class="flex w-full"> -->

                  <!-- <div class="divider divider-horizontal">OR</div> -->
                  <!-- <div class="grid flex-grow rounded-box justify-end">
                      <label class="label">
                        <a
                          href="#"
                          class="label-text-alt link link-hover font-bold"
                          >Forgot password?</a
                        >
                      </label>
                    </div> -->
                  <!-- </div> -->
                </div>
              </div>
              <div class="form-control">
                <button
                  class="
                    btn btn-xs
                    sm:btn-sm
                    md:btn-md
                    lg:btn-lg
                    bg-black
                    text-white
                    border-black
                    w-full
                  "
                  @click="tab.join = 'verify-email'"
                >
                  Submit
                </button>
              </div>
            </div>

            <!--------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------>

            <div class="card-body pb-2" v-if="tab.join == 'verify-email'">
              <font-awesome-icon
                icon="fa-solid fa-envelope-circle-check"
                class="text-5xl"
              />
              <div class="text-xl font-bold">Verify your email</div>
              <div class="text-md">
                Please check your email to verify your account.
              </div>

              <div class="text-md">
                if you haven't received the email,be sure to check your junk
                mail folder.
              </div>

              <div class="form-control">
                <button
                  class="
                    btn btn-xs
                    sm:btn-sm
                    md:btn-md
                    lg:btn-lg
                    bg-black
                    text-white
                    border-black
                    w-full
                  "
                >
                  Resend email
                </button>
              </div>
            </div>

            <!--------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------>

            <div class="card-body pb-2" v-if="tab.join == 'forgot-password'">
              <div class="text-xl font-bold">Forgot password</div>
              <div class="text-md">
                Enter your registered email below to receive password reset
                instruction.
              </div>
              <div class="flex flex-col w-full border-opacity-50">
                <div class="form-control grid">
                  <!-- <label class="label">
                  <span class="label-text">Email Address*</span>
                </label> -->
                  <input
                    type="text"
                    placeholder="Email Address*"
                    class="input input-bordered"
                  />
                </div>
              </div>
              <div class="form-control mt-2">
                <button
                  class="
                    btn btn-xs
                    sm:btn-sm
                    md:btn-md
                    lg:btn-lg
                    bg-black
                    text-white
                    border-black
                    w-full
                  "
                  @click="tab.join = 'verify-email'"
                >
                  Reset password
                </button>
              </div>
            </div>
          </div>
        </div>

        <input type="checkbox" id="modal-profile" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box relative">
            <button
              v-if="
                tab.profile == 'editdetail' || tab.profile == 'editpassword'
              "
              for="modal-profile"
              class="btn btn-sm btn-ghost absolute left-2 top-2"
              @click="tab.profile = 'profile'"
            >
              ←
            </button>
            <label
              for="modal-profile"
              class="btn btn-sm btn-ghost absolute right-2 top-2"
              @click="tab.profile = 'profile'"
              >✕</label
            >
            <div class="card-body pb-2" v-if="tab.profile == 'profile'">
              <div class="text-xl font-bold">My profile</div>
              <!-- <div class="text-md">Edit Detail</div> -->
              <div class="grid flex-grow rounded-box justify-end">
                <label class="label">
                  <a
                    href="#"
                    class="label-text-alt link link-hover font-bold"
                    @click="tab.profile = 'editdetail'"
                  >
                    <font-awesome-icon icon="fa-solid fa-pen" /> Edit Details
                  </a>
                </label>
              </div>
              <div class="flex flex-col w-full border-opacity-50">
                <div class="divider mt-0"></div>

                <div class="form-control grid">
                  <label class="label">
                    <span class="label-text">Name</span>
                  </label>
                  <input
                    disabled
                    type="text"
                    placeholder="Name"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control grid">
                  <label class="label">
                    <span class="label-text">Lastname</span>
                  </label>
                  <input
                    disabled
                    type="text"
                    placeholder="Lastname"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control grid">
                  <label class="label">
                    <span class="label-text">Mobile No.</span>
                  </label>
                  <input
                    disabled
                    type="text"
                    placeholder="Lastname"
                    class="input input-bordered"
                  />
                </div>
              </div>
              <div class="form-control mt-4">
                <button
                  class="
                    btn btn-xs
                    sm:btn-sm
                    md:btn-md
                    lg:btn-lg
                    btn-primary
                    w-full
                  "
                  @click="tab.profile = 'editpassword'"
                >
                  Change password
                </button>
              </div>
              <div class="form-control mt-4 mb-4">
                <button
                  class="
                    btn btn-xs
                    sm:btn-sm
                    md:btn-md
                    lg:btn-lg
                    bg-black
                    text-white
                    border-black
                    w-full
                  "
                >
                  Logout
                </button>
              </div>
            </div>

            <!--------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------>

            <div class="card-body pb-2" v-if="tab.profile == 'editdetail'">
              <div class="text-xl font-bold">Edit Dertail</div>
              <!-- <div class="text-md">Please enter your details.</div> -->
              <div class="flex flex-col w-full border-opacity-50">
                <div class="form-control grid">
                  <label class="label">
                    <span class="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control grid">
                  <label class="label">
                    <span class="label-text">Lastname</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Lastname"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control grid">
                  <label class="label">
                    <span class="label-text">Mobile No.</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Lastname"
                    class="input input-bordered"
                  />
                </div>
              </div>
              <div class="form-control mt-4 mb-4">
                <button
                  class="
                    btn btn-xs
                    sm:btn-sm
                    md:btn-md
                    lg:btn-lg
                    bg-black
                    text-white
                    border-black
                    w-full
                  "
                  @click="tab.profile = 'profile'"
                >
                  Save
                </button>
              </div>
            </div>

            <!--------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------>

            <div class="card-body pb-2" v-if="tab.profile == 'editpassword'">
              <div class="text-xl font-bold">Edit Dertail</div>
              <div class="text-md">
                Your new password must be different from previously used
                passwords.
              </div>
              <div class="flex flex-col w-full border-opacity-50">
                <div class="form-control grid">
                  <label class="label">
                    <span class="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control grid">
                  <label class="label">
                    <span class="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Lastname"
                    class="input input-bordered"
                  />
                </div>
              </div>
              <div class="form-control mt-4 mb-4">
                <button
                  class="
                    btn btn-xs
                    sm:btn-sm
                    md:btn-md
                    lg:btn-lg
                    bg-black
                    text-white
                    border-black
                    w-full
                  "
                  @click="tab.profile = 'profile'"
                >
                  Save
                </button>
              </div>
            </div>

            <!--------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------>
          </div>
        </div>
      </template>
      <template #view>
        <div class="hero min-auto" ref="home" id="home">
          <div class="carousel w-full h-full">
            <div id="slide1" class="carousel-item relative w-full">
              <img
                src="https://placeimg.com/800/200/arch4"
                class="w-full object-cover"
                style="min-height: 250px"
              />
              <div
                class="
                  absolute
                  flex
                  justify-between
                  transform
                  -translate-y-1/2
                  left-5
                  right-5
                  top-1/2
                  z-20
                "
              >
                <a href="#slide2" class="btn btn-circle opacity-20">❮</a>
                <a href="#slide2" class="btn btn-circle opacity-20">❯</a>
              </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
              <img
                src="https://placeimg.com/800/200/arch9"
                class="w-full object-cover"
              />
              <div
                class="
                  absolute
                  flex
                  justify-between
                  transform
                  -translate-y-1/2
                  left-5
                  right-5
                  top-1/2
                  z-20
                "
              >
                <a href="#slide1" class="btn btn-circle opacity-20">❮</a>
                <a href="#slide1" class="btn btn-circle opacity-20">❯</a>
              </div>
            </div>
          </div>

          <div class="hero-overlay bg-base-200 bg-opacity-60 z-10"></div>

          <div
            class="
              hero-content
              flex-col
              lg:flex-row-reverse lg:justify-end lg:w-full lg:pl-20
              pt-40
              pb-20
            "
            style="z-index: 11"
          >
            <div class="container">
              <div class="text-center lg:text-left">
                <div class="text-4xl lg:text-5xl font-bold">
                  Join World Mission!
                </div>
                <div class="text-3xl lg:text-4xl font-bold">
                  In Decentraland
                </div>
                <div class="text-1xl font-bold">
                  join us in our mission to protect
                </div>
                <div class="text-1xl font-bold">
                  our bodles from various disases
                </div>

                <div class="text-1xl font-bold" v-if="!isLogin">
                  <label
                    for="modal-joinnows"
                    class="
                      btn btn-sm
                      sm:btn-sm
                      md:btn-md
                      lg:btn-lg
                      bg-black
                      text-white
                      border-black
                      mt-4
                      w-60
                      modal-button
                    "
                    >JOIN NOW</label
                  >
                  <!-- <button
                    class="
                      btn btn-xs
                      sm:btn-sm
                      md:btn-md
                      lg:btn-lg
                      bg-black
                      text-white
                      border-black
                      mt-4
                      w-60
                    "
                  >
                  
                    JOIN NOW
                  </button> -->
                </div>

                <div class="text-1xl font-bold">
                  <button
                    v-if="!isLogin"
                    @click="isLogin = true"
                    class="
                      btn btn-xs
                      bg-black
                      text-white
                      border-black
                      mt-4
                      w-60
                      modal-button
                    "
                  >
                    test login
                  </button>
                  <button
                    v-if="isLogin"
                    @click="isLogin = false"
                    class="
                      btn btn-xs
                      bg-black
                      text-white
                      border-black
                      mt-4
                      w-60
                      modal-button
                    "
                  >
                    test logout
                  </button>
                </div>

                <div class="grid grid-col w-full" v-if="isLogin">
                  <div
                    class="
                      grid
                      h-auto
                      place-items-right
                      text-center
                      lg:text-right
                    "
                  >
                    <div class="text-1xl font-bold">
                      <label
                        for="modal-joinnows"
                        class="
                          btn btn-sm
                          sm:btn-sm
                          md:btn-md
                          lg:btn-md
                          bg-black
                          text-white
                          border-black
                          mt-4
                          w-60
                          modal-button
                        "
                      >
                        JOIN NOW
                      </label>
                    </div>
                  </div>
                  <div class="divider"></div>
                  <div
                    class="
                      grid
                      rounded-box
                      place-items-center
                      text-white
                      bg-black bg-opacity-70
                    "
                  >
                    <div
                      class="
                        grid
                        lg:flex lg:flex-cols
                        w-full
                        grid-cols-1
                        lg:grid-cols-4
                      "
                    >
                      <div
                        class="
                          grid
                          h-auto
                          flex-grow
                          card
                          rounded-box
                          place-items-center
                        "
                      >
                        <!-- <div class="card w-full"> -->
                        <!-- <div class="card-body items-center text-center"> -->
                        <div class="avatar p-8 lg:p-2">
                          <div
                            class="
                              w-40
                              rounded-full
                              ring
                              ring-primary
                              ring-offset-base-100
                              ring-offset-2
                            "
                          >
                            <img src="https://placeimg.com/192/192/people" />
                          </div>
                        </div>
                        <!-- </div> -->
                        <!-- </div> -->
                      </div>
                      <div
                        class="
                          grid
                          h-auto
                          flex-grow
                          card
                          rounded-box
                          place-items-center
                        "
                      >
                        <div class="card w-full">
                          <!-- <figure class="px-10 pt-10">
                            <img
                              src="https://placeimg.com/400/225/arch6"
                              alt="Shoes"
                              class="rounded-xl"
                            />
                          </figure> -->
                          <div
                            class="card-body items-center text-center lg:pl-0"
                          >
                            <!-- <h2 class="card-title">Roblox</h2> -->

                            <div class="text-1xl font-bold">Vivian</div>
                            <div class="text-1xl font-bold">
                              Wissuwattananupong
                            </div>
                            <div class="text-1xl font-bold">
                              viwian.s@gmail.com
                            </div>
                            <div class="text-1xl font-bold">
                              <label
                                for="modal-profile"
                                class="
                                  btn btn-sm
                                  sm:btn-sm
                                  md:btn-md
                                  lg:btn-md
                                  bg-black
                                  text-white
                                  border-black
                                  mt-4
                                  w-60
                                  modal-button
                                "
                              >
                                Edit Profile
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        class="
                          grid
                          h-auto
                          flex-grow
                          card
                          rounded-box
                          place-items-center
                          border-l-2 border-white border-opacity-25
                        "
                      >
                        <div class="card w-full">
                          <!-- <figure class="px-10 pt-10">
                            <img
                              src="https://placeimg.com/400/225/arch6"
                              alt="Shoes"
                              class="rounded-xl"
                            />
                          </figure> -->
                          <div class="card-body items-center text-center">
                            <!-- <h2 class="card-title">Roblox</h2> -->

                            <div class="text-1xl font-bold">My tokens</div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="
                          grid
                          h-auto
                          flex-grow
                          card
                          rounded-box
                          place-items-center
                          border-l-2 border-white border-opacity-25
                        "
                      >
                        <div class="card w-full">
                          <!-- <figure class="px-10 pt-10">
                            <img
                              src="https://placeimg.com/400/225/arch6"
                              alt="Shoes"
                              class="rounded-xl"
                            />
                          </figure> -->
                          <div class="card-body items-center text-center">
                            <!-- <h2 class="card-title">Roblox</h2> -->

                            <div class="text-1xl font-bold">My coins</div>
                            <div class="text-5xl font-bold">50</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="grid h-auto place-items-left text-left pt-5">
                    <!-- <div class="text-1xl font-bold"> -->
                    <!-- <label
                        for="modal-joinnows"
                        class="
                          btn btn-sm
                          sm:btn-sm
                          md:btn-md
                          lg:btn-md
                          bg-black
                          text-white
                          border-black
                          mt-4
                          w-60
                          modal-button
                        "
                      >
                        JOIN NOW
                      </label> -->
                    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      <div
                        class="
                          text-3xl
                          lg:text-3xl
                          font-bold
                          col-span-2
                          lg:col-span-4
                        "
                      >
                        Get more coins
                      </div>
                      <div class="text-1xl font-bold">Vivian</div>
                      <!-- <div class="text-1xl font-bold"> -->
                      <button
                        class="
                          btn btn-xs
                          bg-black
                          text-white
                          border-black
                          w-32
                          lg:col-span-3 lg:justify-self-start
                          justify-self-end
                        "
                      >
                        do it
                      </button>
                      <!-- </div> -->
                      <div class="text-1xl font-bold">Wissuwattananupong</div>
                      <!-- <div class="text-1xl font-bold"> -->
                      <button
                        class="
                          btn btn-xs
                          bg-black
                          text-white
                          border-black
                          w-32
                          lg:col-span-3 lg:justify-self-start
                          justify-self-end
                        "
                      >
                        rate us
                      </button>
                      <!-- </div> -->
                      <div class="text-1xl font-bold">viwian.s@gmail.com</div>
                      <!-- <div class="text-1xl font-bold"> -->
                      <button
                        class="
                          btn btn-xs
                          bg-black
                          text-white
                          border-black
                          w-32
                          lg:col-span-3 lg:justify-self-start
                          justify-self-end
                        "
                      >
                        explore
                      </button>
                      <!-- </div> -->
                    </div>
                    <!-- <div class="flex flex-wrap flex-col-reverse">
                      <div class="text-3xl lg:text-3xl font-bold">
                        Join World Mission!
                      </div>
                      <div class="text-1xl font-bold">Vivian</div>
                      <div class="text-1xl font-bold">Wissuwattananupong</div>
                      <div class="text-1xl font-bold">viwian.s@gmail.com</div>
                    </div> -->

                    <!-- </div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container mx-auto py-10">
          <div class="grid grid-col w-full px-4 lg:px-auto">
            <div class="grid h-auto place-items-left">
              <div class="text-2xl lg:text-3xl font-bold">
                Explore Multiverse
              </div>
            </div>
            <div class="divider"></div>
            <div class="grid rounded-box place-items-center">
              <div class="grid w-full gap-4 grid-cols-1 lg:grid-cols-4">
                <div
                  class="
                    grid
                    h-auto
                    flex-grow
                    card
                    rounded-box
                    place-items-center
                  "
                >
                  <div class="card w-full bg-base-200 shadow-xl">
                    <figure class="px-10 pt-10">
                      <img
                        src="https://placeimg.com/400/225/arch5"
                        alt="Shoes"
                        class="rounded-xl"
                      />
                    </figure>
                    <div class="card-body items-center text-center">
                      <h2 class="card-title">Decentraland</h2>
                      <!-- <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions">
                            <button class="btn btn-primary">Buy Now</button>
                        </div> -->
                    </div>
                  </div>
                </div>
                <!-- <div class="divider divider-horizontal">OR</div> -->
                <div
                  class="
                    grid
                    h-auto
                    flex-grow
                    card
                    rounded-box
                    place-items-center
                  "
                >
                  <div class="card w-full bg-base-200 shadow-xl">
                    <figure class="px-10 pt-10">
                      <img
                        src="https://placeimg.com/400/225/arch6"
                        alt="Shoes"
                        class="rounded-xl"
                      />
                    </figure>
                    <div class="card-body items-center text-center">
                      <h2 class="card-title">Roblox</h2>
                      <!-- <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions">
                            <button class="btn btn-primary">Buy Now</button>
                        </div> -->
                    </div>
                  </div>
                </div>
                <div
                  class="
                    grid
                    h-auto
                    flex-grow
                    card
                    rounded-box
                    place-items-center
                  "
                >
                  <div class="card w-full bg-base-200 shadow-xl">
                    <figure class="px-10 pt-10">
                      <img
                        src="https://placeimg.com/400/225/arch7"
                        alt="Shoes"
                        class="rounded-xl"
                      />
                    </figure>
                    <div class="card-body items-center text-center">
                      <h2 class="card-title">Zepeto</h2>
                      <!-- <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions">
                            <button class="btn btn-primary">Buy Now</button>
                        </div> -->
                    </div>
                  </div>
                </div>
                <div
                  class="
                    grid
                    h-auto
                    flex-grow
                    card
                    rounded-box
                    place-items-center
                  "
                >
                  <div class="card w-full bg-base-200 shadow-xl">
                    <figure class="px-10 pt-10">
                      <img
                        src="https://placeimg.com/400/225/arch8"
                        alt="Shoes"
                        class="rounded-xl"
                      />
                    </figure>
                    <div class="card-body items-center text-center">
                      <h2 class="card-title">Spatial</h2>
                      <!-- <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions">
                            <button class="btn btn-primary">Buy Now</button>
                        </div> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-base-200" ref="about" id="about">
          <div class="container mx-auto">
            <div class="card lg:card-side">
              <div class="card-body items-center text-center self-center">
                <div class="card-title flex flex-col w-full">
                  <div class="text-2xl lg:text-3xl font-bold">About</div>
                  <div class="divider"></div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy kjbguhjcfdgxhgb k jnbc vhgb nb nm mnb vhjv jh km,
                  ,m jhvguyvuhj njk bjhlvchg jhnbm nkmbjhv hkb kjn jkhlcgfdx
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy kjbguhjcfdgxhgb k jnbc vhgb nb nm mnb vhjv jh km,
                  ,m jhvguyvuhj njk bjhlvchg jhnbm nkmbjhv hkb kjn jkhlcgfdx
                </p>
                <!-- <div class="card-actions justify-end">

<button class="btn btn-primary">Listen</button>
            </div> -->
              </div>
              <figure>
                <img src="https://placeimg.com/500/400/arch2" alt="Album" />
              </figure>
            </div>
          </div>
        </div>

        <div class="bg-base-100" ref="events" id="events">
          <div class="container mx-auto py-10">
            <div class="card">
              <div class="card-body items-center text-center self-center">
                <div class="card-title flex flex-col w-full">
                  <div class="text-2xl lg:text-3xl font-bold">Event</div>
                  <div class="divider"></div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy kjbguhjcfdgxhgb k jnbc vhgb nb nm mnb vhjv jh km,
                  ,m jhvguyvuhj njk bjhlvchg jhnbm nkmbjhv hkb kjn jkhlcgfdx
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy kjbguhjcfdgxhgb k jnbc vhgb nb nm mnb vhjv jh km,
                  ,m jhvguyvuhj njk bjhlvchg jhnbm nkmbjhv hkb kjn jkhlcgfdx
                </p>
                <!-- <div class="card-actions justify-end">

<button class="btn btn-primary">Listen</button>
            </div> -->
              </div>

              <!-- <div class="card-body items-center text-center self-center w-full"> -->
              <figure class="w-full">
                <img
                  src="https://placeimg.com/500/400/arch1"
                  alt="Album"
                  class="w-full max-h-96 object-cover"
                />
              </figure>
              <!-- <div class="card-title flex flex-col w-full">
                <div class="text-2xl lg:text-3xl font-bold">Event</div>
                <div class="divider"></div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy kjbguhjcfdgxhgb k jnbc vhgb nb nm mnb vhjv jh km, ,m jhvguyvuhj njk bjhlvchg jhnbm nkmbjhv hkb kjn jkhlcgfdx Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy kjbguhjcfdgxhgb k jnbc vhgb nb nm mnb vhjv jh km, ,m jhvguyvuhj njk bjhlvchg jhnbm nkmbjhv hkb kjn jkhlcgfdx </p> -->
              <!-- <div class="card-actions justify-end">

<button class="btn btn-primary">Listen</button>
            </div> -->
              <!-- </div> -->
            </div>
          </div>
        </div>

        <div
          class="bg-primary-content text-base-100"
          ref="contact"
          id="contact"
        >
          <div class="container mx-auto">
            <div class="card lg:card-side">
              <div class="card-body items-left text-left self-left">
                <!-- <div class="card-title  w-full text-1xl lg:text-2xl font-bold">Thai Health Promotion Foundation
            </div> -->
                <!-- <div class="text-1xl lg:text-2xl font-bold">Address</div> -->
                <!-- <p class="text-base-100">ThaiHealth Centre,99/99 asdsa dsadasda sdsa dsa dasdasdsa thailand </p> -->
                <img src="https://placeimg.com/600/300/arch2" alt="Album" />
                <!-- <div class="card-actions justify-end">

<button class="btn btn-primary">Listen</button>
            </div> -->
              </div>
              <!-- <figure><img src="https://placeimg.com/600/300/arch2" alt="Album" class="py-4"/></figure> -->
              <div class="card-body items-left text-left self-left">
                <div class="card-title w-full text-1xl lg:text-2xl font-bold">
                  Thai Health Promotion Foundation
                </div>
                <div class="text-1xl lg:text-2xl font-bold">Address</div>
                <p class="text-base-100">
                  ThaiHealth Centre,99/99 asdsa dsadasda sdsa dsa dasdasdsa
                  thailand
                </p>

                <!-- <div class="card-actions justify-end">

<button class="btn btn-primary">Listen</button>
            </div> -->
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
  name: "Dashboard",
  components: {
    MemberLayout,
  },
  data() {
    return {
      tab: {
        join: "login",
        profile: "profile",
      },
      isLogin: false,
      logs: {
        rows: [],
        total: 0,
        page: 1,
        row: 100,
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
    goToSection(value) {
      const top = this.$refs[value].offsetTop;
      window.scrollTo({
        top: top,
        left: 0,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    // this.goSection('about')
  },
  beforeDestroy() {},
  mounted() {},
};
</script>
