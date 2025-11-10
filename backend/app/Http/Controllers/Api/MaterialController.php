<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Requests\StoreUpdateMaterialRequest;
use App\Models\Material;
use Illuminate\Support\Facades\Storage;

class MaterialController extends Controller
{
 
    // Retorna todos os materiais (pode paginar se quiser)
    public function index()
    {
        $materials = Material::all();
        return response()->json($materials);
    }

    // Faz a criação de instancias no banco recebendo dados via api
    public function store(StoreUpdateMaterialRequest $request)
    {
        // Faz upload dos arquivos
        $coverPath = $request->file('cover')->store('covers', 'public');
        $docPath = $request->file('doc')->store('docs', 'public');

        // Cria o registro
        $material = Material::create(array_merge(
            $request->validated(),
            [
                'cover' => $coverPath,
                'doc' => $docPath,
            ]
        ));

        return response()->json($material, 201);
    }


    // Mostra uma instanci especifica
    public function show(string $id)
    {
        $material = Material::findOrFail($id);
        return response()->json($material);
    }

    // Edita uma instancia
    public function update(StoreUpdateMaterialRequest $request, $id)
    {
        $material = Material::findOrFail($id);
        $data = $request->validated();

        // Atualiza apenas se houver novos arquivos
        if ($request->hasFile('cover')) {
            if ($material->cover) {
                Storage::disk('public')->delete($material->cover);
            }
            $data['cover'] = $request->file('cover')->store('covers', 'public');
        }

        if ($request->hasFile('doc')) {
            if ($material->doc) {
                Storage::disk('public')->delete($material->doc);
            }
            $data['doc'] = $request->file('doc')->store('docs', 'public');
        }

        $material->update($data);

        return response()->json($material);
    }

    //
    public function destroy(string $id)
    {
        $material = Material::findOrFail($id);

        // Deleta arquivos relacionados
        Storage::disk('public')->delete([$material->cover, $material->doc]);

        $material->delete();

        return response()->json(['message' => 'Material removido com sucesso.']);
    }
}
