<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Material;
use Illuminate\Support\Facades\Storage;

class MaterialController extends Controller
{
    /**
     * Lista de todos os materiais
     */
    public function index()
    {
        $materiais = Material::with(['writer', 'category'])->get();
        //Retorna todas as instancias da classe Material e todas as instancias de writer e category que são de alguma forma associadas a alguma instância de material

        return response()->json($materiais);
        //Retorna um json com as informações da consulta

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
    }

    /**
     * Cria um novo material
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'writer_id' => 'required|exists:writer,id',
            'category_id' => 'required|exists:category,id',
            'title' => 'required|string|max:100',
            'autor' => 'required|string|max:100',
            'doi' => 'required|string|max:50',
            'description' => 'required|string',
            'publication_data' => 'required|date',
            'cover' => 'required|image|mimes:jpeg,png,jpg|max:2048',
            'doc' => 'required|file|mimes:pdf,doc,docx|max:10240',
            'page_number' => 'required|integer|min:1',
            'type' => 'required|string|max:50',
            'status' => 'required|string|max:50',
        ]);

        // Upload da imagem de capa
        if ($request->hasFile('cover')) {
            $validated['cover'] = $request->file('cover')->store('covers', 'public');
        }
        //Se o valor for um file ele move esse arquivo para storage/app/public/covers/ e retorna o caminho do arquivo para ser salvo no db

        // Upload do documento
        if ($request->hasFile('doc')) {
            $validated['doc'] = $request->file('doc')->store('docs', 'public');
        }
        //Se o valor for um file ele move esse arquivo para storage/app/public/docs/ e retorna o caminho do arquivo para ser salvo no db

        $material = Material::create($validated);

        return response()->json([
            'message' => 'Material criado com sucesso!',
            'material' => $material
        ], 201);
    
    }

    /**
     * Mostra um material especifico
     */
    public function show(string $id)
    {
        $material = Material::with(['writer', 'category'])->findOrFail($id);
        //Retorna a instancia da classe Material e todas as instancias de writer e category que são de alguma forma associadas a instância de material que tiver o id passado de parâmetro 
        return response()->json($material);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $material = Material::findOrFail($id);
        //A variável $material é a instancia que tiver o id passsado de parâmetro

        $validated = $request->validate([
            'title' => 'nullable|string|max:100',
            'autor' => 'nullable|string|max:100',
            'doi' => 'nullable|string|max:50',
            'description' => 'nullable|string',
            'publication_data' => 'nullable|date',
            'cover' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'doc' => 'nullable|file|mimes:pdf,doc,docx|max:10240',
            'page_number' => 'nullable|integer|min:1',
            'type' => 'nullable|string|max:50',
            'status' => 'nullable|string|max:50',
        ]);

        // Atualiza arquivos se enviados
        if ($request->hasFile('cover')) {
            if ($material->cover) {
                Storage::disk('public')->delete($material->cover);
            }
            $validated['cover'] = $request->file('cover')->store('covers', 'public');
        }

        if ($request->hasFile('doc')) {
            if ($material->doc) {
                Storage::disk('public')->delete($material->doc);
            }
            $validated['doc'] = $request->file('doc')->store('docs', 'public');
        }

        $material->update($validated);

        return response()->json([
            'message' => 'Material atualizado com sucesso!',
            'material' => $material
        ]);
    }

    /**
     * Remove um material especifico
     */
    public function destroy(string $id)
    {
        $material = Material::findOrFail($id);

        if ($material->cover) {
            Storage::disk('public')->delete($material->cover);
        }

        if ($material->doc) {
            Storage::disk('public')->delete($material->doc);
        }

        $material->delete();

        return response()->json(['message' => 'Material deletado com sucesso!']);
    }
}
