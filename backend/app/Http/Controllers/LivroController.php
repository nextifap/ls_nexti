<?php 

namespace App\Http\Controllers;

use App\Http\Requests\StoreLivroRequest;
use App\Models\Livro;

class LivroController extends Controller
{
    public function store(StoreLivroRequest $request)
    {
        $livro = Livro::create([
            'link_amazon' => $request->link_amazon,
            'titulo' => $request->titulo,
            'autor' => $request->autor,
            'doi' => $request->doi,
            'numero_paginas' => $request->numero_paginas,
            'categorias' => $request->categorias,
            'descricao' => $request->descricao,
            'tipo_documento' => $request->tipo_documento,
            'visibilidade' => $request->visibilidade ?? true,
            'capa_path' => $request->capa_path,
            'arquivo_path' => $request->arquivo_path,
            'data_publicacao' => now(),
            'status' => 'aprovado',
        ]);

        return response()->json([
            'message' => 'Livro cadastrado com sucesso!',
            'livro' => $livro,
        ], 201);
    }
}

