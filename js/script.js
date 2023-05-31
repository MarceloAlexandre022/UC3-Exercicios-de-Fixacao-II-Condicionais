<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Atividade 23/05/2023</title>
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <style>
        /* Estilos aqui */
    </style>
</head>

<body>
    <div class="container text-center">
        <div class="row">
            <div class="col-12 col-md-6">
                <h1>Requisitos</h1>
                <div class="p-3 bg-info bg-opacity-10 border border-info border-info rounded">
                    <!-- Formulário -->
                    <h2>Formulário de Matrícula</h2>
                    <div class="input-group mb-3">
                        <label for="aInput">Data Nasc.</label>
                        <input type="date" id="aInput" class="form-control">
                    </div>
                    <div class="input-group mb-3">
                        <label for="bInput">Renda Percápta</label>
                        <input type="number" id="bInput" class="form-control" placeholder="Renda Percápta">
                    </div>
                    <div class="input-group mb-3">
                        <label for="cInput">Qtos moradores</label>
                        <input type="number" id="cInput" class="form-control" placeholder="Qtos moradores">
                        <button onclick="calcularAdmissao()" class="btn btn-primary">Calcular</button>
                    </div>
                </div>
                <div id="resultado" class="result-container mt-3"></div>
            </div>
        </div>
    </div>

    <script src="js/script.js"></script>
</body>

</html>
