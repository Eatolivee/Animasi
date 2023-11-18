<?php

$nama_user		= $_POST['nama_user'];
$Quest2		= $_POST['Quest2'];

$format = "\n$nama_user | $Quest2";

//kita buka file config.txt
$file = fopen('config.txt', 'a');
fwrite($file, $format);

//tutup file config
fclose($file);

?>
<script type="text/javascript">
	window.history.back();
</script>