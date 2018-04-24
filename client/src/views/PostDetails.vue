<template>
  <div class="post-details">
    <h2>{{ post_title }}</h2>
    <p class="date">{{ date_posted }}</p>
    <img :src="image_url" class="my-4" style="width: 75%;" />
    <p class="content text-justify">
      {{ post_content }}
    </p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'post-details',
  data: function () {
    return {
      post_title: '',
      post_content: '',
      date_posted: '',
      image_url: ''
    }
  },
  props: ['id'],
  watch: {
    id () {
      axios.get(`${this.$baseUrl}/api/post/show/${this.id}`)
        .then(response => {
          console.log('post details', response.data)
          this.post_title = response.data.data.post_title
          this.post_content = response.data.data.post_content
          this.date_posted = response.data.data.createdAt
          this.image_url = response.data.data.image_url
        })
        .catch(error => {
          console.log('error post details', error.message)
        })
    }
  },
  created: function () {
    console.log(this.id)
    axios.get(`${this.$baseUrl}/api/post/show/${this.id}`)
      .then(response => {
        console.log('post details', response.data)
        this.post_title = response.data.data.post_title
        this.post_content = response.data.data.post_content
        this.date_posted = response.data.data.createdAt
        this.image_url = response.data.data.image_url
      })
      .catch(error => {
        console.log('error post details', error.message)
      })
  }
}
</script>

<style>

</style>
