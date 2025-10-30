<?php 

namespace App\Http\Controllers;

use App\Http\Requests\StoreLivroRequest;
use App\Models\Livro;

class LivroController extends Controller
{
    public function store(StoreLivroRequest $request)
    {
        $livro = Livro::create([
            'titulo' => $request->titulo,
            'autor' => $request->autor,
            'categoria' => $request->categoria,
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
