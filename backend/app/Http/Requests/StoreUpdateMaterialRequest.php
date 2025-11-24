<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUpdateMaterialRequest extends FormRequest
{
    public function authorize()
    {
        return true; // ajuste se tiver autorização por usuário
    }

    public function rules()
    {
        // se for update, você pode permitir cover/doc opcionais
        $isUpdate = $this->isMethod('put') || $this->isMethod('patch');

        return [
            'writer' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'doi' => 'required|string|max:255',
            'description' => 'required|string',
            'publication_data' => 'required|date',
            'cover' => ($isUpdate ? 'nullable' : 'required') . '|file|image|max:5120', // 5MB
            'doc' => ($isUpdate ? 'nullable' : 'required') . '|file|mimes:pdf,epub,txt|max:10240', // 10MB
            'page_number' => 'required|integer|min:1',
            'type' => 'required|string|max:100',
            'status' => 'required|string|max:50',
        ];
    }
}