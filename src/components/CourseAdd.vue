<template>
  <div>
    <h3>Add Course</h3>
    <hr />
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Course Name</span>
      </div>
      <input
        type="text"
        class="form-control"
        placeholder="Enter course name"
        required
        v-model="course_name"
      />
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Course Price</span>
      </div>
      <input
        type="number"
        class="form-control"
        placeholder="Enter course price"
        required
        v-model="course_price"
      />
    </div>
    <div class="input-group mb-3">
      <button @click="saveCourse" class="btn btn-primary btn-md">
        Save Course
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CourseAdd",
  components: {},
  data() {
    return {
      course_name: "",
      course_price: "",
    };
  },
  methods: {
    async saveCourse() {
      try {
        await axios.post("http://localhost:8001/courses", {
          course_name: this.course_name,
          course_price: this.course_price,
        });
        this.course_name = "";
        this.course_price = "";
        this.$router.push("/course-list");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
