<template>
  <div class="card-body pb-2" >
    <div class="text-xl font-bold">My profile</div>
    <!-- <div class="text-md">Edit Detail</div> -->
    <div class="grid flex-grow rounded-box justify-end">
      <label class="label">
        <a
          href="#"
          class="label-text-alt link link-hover font-bold"
          @click="$emit('changetab','editdetail')"
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
        class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-primary w-full"
          @click="$emit('changetab','editpassword')"
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
        @click="Logout"
      >
        Logout
      </button>
    </div>
  </div>
</template>