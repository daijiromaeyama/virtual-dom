$(function () {
  $(".js-account-item").each(function () {
    var $this = $(this);
    var $thisData = $this.data();
    console.log($thisData)
    if ($thisData.follow) {
      $this.find(".js-follow-btn").addClass("isFollow");
    }
  });

  $(".js-follow-btn").on("click", function () {
    var $this = $(this);
    var $accountItem = $this.parents(".js-account-item");
    var $thisData = $accountItem.data();

    if ($thisData.follow) {
      // ajax

      $this.removeClass("isFollow");
      $this.text("フォロー中"); 
      $accountItem.data("follow", false);
    } else {
      // ajax

      $this.addClass("isFollow");
      $this.text("フォローする"); 
      $accountItem.data("follow", true);
    }
  });
});
