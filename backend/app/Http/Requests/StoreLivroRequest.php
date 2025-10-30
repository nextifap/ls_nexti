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
            'titulo' => 'required|string|max:255',
            'autor' => 'required|string|max:255',
            'categoria' => 'required|string|max:255',
            'capa_path' => 'nullable|string|max:255',
            'arquivo_path' => 'nullable|string|max:255',
        ];
    }
}
