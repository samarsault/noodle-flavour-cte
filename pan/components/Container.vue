<template>
  <component :is="page" v-bind="properties" />
</template>

<script>
import UserData from '../data/user'
import CoursesData from '../data/courses'

export default {
  props: ["page", "access"],
  data() {
    return {
      courses: [],
    };
  },
  computed: {
    properties() {
      return {
        user: UserData,
        courses: this.access?.includes('courses') ? CoursesData : null,
        course: this.getCourse()
      };
    },
  },
  methods: {
    getCourse() {
      const _id = this.$route.params.course_id; 
      if (_id && this.access?.includes('course')) {
        return CoursesData.find(x => x._id == _id)
      }
      return null;
    }
  }
};
</script>
