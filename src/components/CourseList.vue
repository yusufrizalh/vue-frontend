<template>
  <div>
    <div>
      <router-link :to="{ name: 'CourseAdd' }" class="btn btn-md btn-primary"
        >Add Course</router-link
      >
      <br /><br />
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Search</span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="Enter course name"
          required
          v-model="searchquery"
        />
      </div>
    </div>
    <div>
      <table class="table table-striped table-hover table-bordered mt-3">
        <thead>
          <th>Course Name</th>
          <th>Course Price</th>
          <th>Actions</th>
        </thead>
        <tbody>
          <tr v-for="course of courses" :key="course.id">
            <td>{{ course.course_name }}</td>
            <td>{{ course.course_price }}</td>
            <td>
              <router-link
                :to="{ name: 'CourseEdit', params: { id: course.id } }"
                class="btn btn-sm btn-info"
                >Edit</router-link
              >
              &nbsp;
              <a @click="deleteCourse(course.id)" class="btn btn-sm btn-danger"
                >Delete</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CourseList",
  components: {},
  data() {
    return {
      courses: [],
      searchquery: null,
    };
  },
  methods: {
    async getAllCourses() {
      try {
        const res = await axios.get("http://localhost:8001/courses/");
        this.courses = res.data;
        console.log("test");
      } catch (error) {
        console.log(error);
      }
    },
    async deleteCourse(id) {
      try {
        await axios.delete(`http://localhost:8001/courses/${id}`);
        this.getAllCourses();
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getAllCourses();
  },
  computed: {
    courses() {
      if (this.searchquery) {
        return this.courses.filter((item) => {
          return this.searchquery
            .toLowerCase()
            .split(" ")
            .every((val) => item.course_name.toLowerCase().includes(val));
        });
      } else {
        return this.courses;
      }
    },
  },
};
</script>
