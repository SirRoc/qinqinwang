/////////////////////////////////////
/////////////produstList ///////////
////////////////////////////////////
function ProdustList(){
	this.title = 'Avon雅芳小红裙套装（香体乳150ml+沐浴露150ml)';
	this.price = '&yen;1000';
	this.image = 'img/boutque01_r2_c2.jpg';
}
ProdustList.prototype = {
	bindDOM: function(){
		var str = '';
		str += '<dl>';
			str += '<dt>';
				str += '<a>';
					str += '<img src="'+this.image+'" width="384" height="225" />';
				str += '</a>';
			str += '</dt>';
			str += '<dd>';
				str += '<span>';
					str += '<a>';
						str += '<em>4.48折/</em>'+this.title+'';
					str += '</a>';
				str += '</span>';
			str += '</dd>';
			str += '<dd class="price">';
				str += '<em>'+this.price+'</em>';
				str += '<del>'+this.price+'</del>';
				str += '<i>销量：0天2时19分6秒</i>';
			str += ' </dd>';
		str += '</dl>';
		return str;          
	}
}
window.onload = function(){
	var produst1 = new ProdustList();
	/*实例1*/
	produst1.image = 'img/boutque01_r2_c2.jpg';
	produst1.title = '1von雅芳小红裙套装（香体乳150ml+沐浴露150ml)';
	produst1.price = '&yen;1000';
	var produst2 = new ProdustList();
	/*实例2*/
	produst2.image = 'img/boutque01_r2_c2.jpg';
	produst2.title = '2von雅芳小红裙套装（香体乳150ml+沐浴露150ml)';
	produst2.price = '&yen;1000';
	
	var produst3 = new ProdustList();
	/*实例2*/
	produst3.image = 'img/boutque01_r2_c2.jpg';
	produst3.title = '2von雅芳小红裙套装（香体乳150ml+沐浴露150ml)';
	produst3.price = '&yen;1000';

	var produstLists = [produst1,produst2,produst3];
	var container = document.getElementById('container');
	var str = '';
	for(var i=0;i<produstLists.length;i++){
		str += produstLists[i].bindDOM();
	}
	container.innerHTML = str;
}