<template>
  <div>
    <h3>Edit Course</h3>
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
      <button @click="updateCourse" class="btn btn-primary btn-md">
        Update Course
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CourseEdit",
  components: {},
  data() {
    return {
      course_name: "",
      course_price: "",
    };
  },
  methods: {
    async getCourseById() {
      try {
        const res = await axios.get(
          `http://localhost:8001/courses/${this.$route.params.id}`
        );
        this.course_name = res.data.course_name;
        this.course_price = res.data.course_price;
      } catch (error) {
        console.log(error);
      }
    },
    async updateCourse() {
      try {
        await axios.put(
          `http://localhost:8001/courses/${this.$route.params.id}`,
          {
            course_name: this.course_name,
            course_price: this.course_price,
          }
        );
        this.course_name = "";
        this.course_price = "";
        this.$router.push("/course-list");
      } catch (error) {
        console.log(error);
      }
    },
  },
  created: function () {
    this.getCourseById();
  },
};
</script>
