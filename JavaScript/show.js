/*
 ����
 parent			�����ٲ���Ԫ�ص�������Ĭ��Ϊ $("waterfall")
 container		�����ٲ����ĸ�������Ĭ��Ϊ $("threadlist")
 maxcolumn		�������У�Ĭ��Ϊ 0 ������
 space			ͼƬ��࣬Ĭ��Ϊ 10
 index			�ӵڼ��ſ�ʼ���У�Ĭ��Ϊ 0
 tag			�ٲ���Ԫ�ص� tagName��Ĭ��Ϊ li
 columnsheight	����и߶ȵ�����
 
 ����ֵ
 index			��ǰ�ٲ����Ѿ������˶��ٸ�ͼƬ
 totalwidth		��ǰ�ٲ������ܿ��
 totalheight	��ǰ�ٲ������ܸ߶�
 columnsheight	����ٲ����иߵ�����
 */
function recadd(tid) {
	$('recommendv_add_'+tid).innerHTML=parseInt($('recommendv_add_'+tid).innerHTML)+1;
}
function recsubtract(tid) {
	$('recommendv_subtract_'+tid).innerHTML=parseInt($('recommendv_subtract_'+tid).innerHTML)+1;
}
function showDiv(divID) {
            if (divID != null && divID != "") {
                var v = document.getElementById(divID);
                if (v.style.display == "none") {
                    v.style.display = "inline";
                }
            }
        }

function hiddenDiv(divID) {
            if (divID != null && divID != "") {
                var vv = document.getElementById(divID);
                if (vv.style.display == "inline") {
                    vv.style.display = "none";
                }
            }
        }
