<?php
/**
 * TOP API: taobao.fenxiao.grades.get request
 *
 * @author auto create
 * @since  1.0, 2013-04-29 16:46:23
 */
class FenxiaoGradesGetRequest {

	private $apiParas = array();

	public function getApiMethodName() {
		return "taobao.fenxiao.grades.get";
	}

	public function getApiParas() {
		return $this->apiParas;
	}

	public function check() {

	}

	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key           = $value;
	}
}