<template>
  <div class="card-body pb-2" >
    <div class="text-xl font-bold">Change Password</div>
    <div class="text-md">
      Your new password must be different from previously used passwords.
    </div>
    <div class="flex flex-col w-full border-opacity-50">
      <div class="form-control grid">
        <label class="label">
          <span class="label-text">Password</span>
        </label>
        <input type="text" placeholder="Name" class="input input-bordered" />
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
      <!-- <button
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
                </button> -->
      <label
        for="modal-confirm"
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
        Save
      </label>
    </div>
  </div>
</template>