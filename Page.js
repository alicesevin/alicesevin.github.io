/*construct pages objects*/
function Page(pageTitle,pageHash,pageClassSuffix,pageFooter) {
    this.pageTitle = pageTitle;
    this.pageHash = pageHash;
    this.pageClassSuffix = pageClassSuffix;
    this.pageFooter = pageFooter;
    this.createLink();
}
/*create and add nav link to header*/
Page.prototype.createLink = function(){
    this.link_item = $('<a class="navLink link'+this.pageClassSuffix+'"></a>').attr('href','#/'+ this.pageHash).html(this.pageTitle);
    this.list_item = $('<li></li>').append(this.link_item);
    $('nav').append(this.list_item);
};