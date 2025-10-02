<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class BugReportController extends Controller
{
    public function store(Request $request)
    {
        $nome = $request->input('nome');
        $descricao = $request->input('descricao');

        // URL do webhook do Discord
        $webhookUrl = "DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/1372647224185454663/51VsWzP2bl6ZyHceDtsDo0yJ7EwHFN6FkdhKCKKw6gURX9fDLvrBzY3v4yEeZYg8lNte"; // coloca o seu aqui

        // Monta a mensagem
        $mensagem = [
            "embeds" => [
                [
                    "title" => "🐞 Novo Bug Reportado",
                    "color" => 15158332, // vermelho
                    "fields" => [
                        [
                            "name" => "👤 Nome",
                            "value" => $nome,
                            "inline" => true
                        ],
                        [
                            "name" => "📄 Descrição",
                            "value" => $descricao,
                            "inline" => false
                        ]
                    ],
                    "footer" => [
                        "text" => "Enviado em " . now()->format('d/m/Y H:i:s')
                    ]
                ]
            ]
        ];

        // Envia para o Discord
        $resposta = Http::post($webhookUrl, $mensagem);

        if ($resposta->successful()) {
            return response()->json([
                "status" => "ok",
                "mensagem" => "Bug enviado com sucesso para o Discord!"
            ], 200);
        } else {
            return response()->json([
                "status" => "erro",
                "mensagem" => "Falha ao enviar bug para o Discord."
            ], 500);
        }
    }
}
