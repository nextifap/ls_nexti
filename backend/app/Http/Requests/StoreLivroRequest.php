<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreLivroRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'link_amazon' => 'nullable|string|max:255',
            'titulo' => 'required|string|max:255',
            'autor' => 'required|string|max:255',
            'doi' => 'nullable|string|max:255',
            'numero_paginas' => 'nullable|integer|min:1',
            'categorias' => 'nullable|string|max:255',
            'descricao' => 'nullable|string',
            'tipo_documento' => 'nullable|string|max:255',
            'visibilidade' => 'boolean',
            'capa_path' => 'nullable|string|max:255',
            'arquivo_path' => 'nullable|string|max:255',
        ];
    }
}

