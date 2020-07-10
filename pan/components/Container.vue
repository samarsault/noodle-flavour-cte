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
        courses: this.access?.includes('courses') ? CoursesData : null
      };
    },
  },
};
</script>
