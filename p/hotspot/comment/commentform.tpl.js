(function() {
  var tpl = '<div class="comment_form">\
	<form action="#">\
		<div class="comment_form_centent">\
			<textarea class="comment_form_content" placeholder="随便说点什么吧"></textarea>\
		</div>\
		<div class="comment_form_bottom">\
			<button class="comment_form_btn comment_form_submit" type="submit">贴上</button>\
			<button class="comment_form_btn comment_form_cancel" type="button">取消</button>\
		</div>\
	</form>\
</div>';

  // cmd
  if (typeof module !== "undefined" && module.exports) {
      module.exports = tpl;
  }
  // amd
 if (typeof define === "function" && (define.amd||define.fmd)) {
      define(function () {
          return tpl;
      });
  }
})();