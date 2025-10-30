<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Http\Controllers\MaterialController;
use App\Http\Controllers\LivroController;

Route::get('/materiais', [MaterialController::class, 'index']);
Route::get('/materiais/{id}', [MaterialController::class, 'show']);
Route::post('/materiais', [MaterialController::class, 'store']);
Route::put('/materiais/{id}', [MaterialController::class, 'update']);
Route::delete('/materiais/{id}', [MaterialController::class, 'destroy']);
Route::post('/livros', [LivroController::class, 'store']);

Route::post('/reportar', function (Request $request) {
    // Validação dos campos
    $request->validate([
        'nome' => 'required|string',
        'descricao' => 'required|string',
    ]);

    $nome = $request->input('nome');
    $descricao = $request->input('descricao');

    // Pega a URL do webhook do .env
    $webhookUrl = env('DISCORD_WEBHOOK_URL');

    $message = [
        'content' => "**Novo bug reportado**\n**Nome:** $nome\n**Descrição:** $descricao"
    ];

    try {
        $response = Http::withHeaders([
            'Content-Type' => 'application/json'
        ])->post($webhookUrl, $message);

        if ($response->successful()) {
            return response()->json(['message' => 'Bug reportado com sucesso!']);
        } else {
            return response()->json([
                'message' => 'Erro ao enviar para o Discord.',
                'body' => $response->body()
            ], 500);
        }
    } catch (\Exception $e) {
        return response()->json([
            'message' => 'Erro de conexão ou webhook inválido.',
            'error' => $e->getMessage()
        ], 500);
    }
});