(function () {
  'use strict'

  angular.module('app')
    .component('postList', {
      templateUrl: 'js/posts/post-list.template.html',
      controller: controller
    })

  function controller() {
    const vm = this

    vm.$onInit = onInit
    vm.showHideForm = showHideForm
    vm.createPost = createPost
    vm.createPostComment = createPostComment
    vm.votePostUp = votePostUp
    vm.votePostDown = votePostDown

    function onInit() {
      vm.posts = [
        {
          title: "A tragic life: Matt Pestridge, the Story",
          body: "A hard-working, iconic fellow, whom just can't seem to get it together.",
          author: 'Iconic Matt',
          image_url: 'https://images.pexels.com/photos/211050/pexels-photo-211050.jpeg?h=350&auto=compress',
          vote_count: 1,
          created_at: new Date,
          comments: [
            { content: 'Aidan?' },
            { content: 'It is me!' },
          ],
        }
      ]
    }

    function showHideForm() {
      vm.postCreation = !vm.postCreation
    }

    function createPost() {
      vm.post.vote_count = 0
      vm.post.created_at = new Date
      vm.post.comments = []
      vm.posts.push(vm.post)
      vm.showHideForm()
      delete vm.post
    }

    function createPostComment(post) {
      post.comments.push(post.newComment)
      delete post.newComment
    }

    function votePostUp(post) {
      post.vote_count++
    }

    function votePostDown(post) {
      if (post.vote_count == 0) return
      post.vote_count--
    }

  }

}());
