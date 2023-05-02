<?php
// Datos de conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "gastos";

// Crear conexión a la base de datos
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
  die("La conexión falló: " . $conn->connect_error);
}

// Obtener los datos enviados por el formulario
$concepto = $_POST["concepto"];
$fecha = $_POST["fecha"];
$monto = $_POST["monto"];

// Preparar la consulta SQL para agregar un nuevo gasto
$sql = "INSERT INTO datos (concepto, fecha, monto) VALUES ('$concepto', '$fecha', '$monto')";

// Ejecutar la consulta SQL
if ($conn->query($sql) === TRUE) {
  echo "Nuevo gasto agregado correctamente";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

// Cerrar la conexión a la base de datos
$conn->close();
?>