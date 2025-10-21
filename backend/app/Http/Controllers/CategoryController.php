<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    // GET /api/categories
    public function index()
    {
        return response()->json(Category::all());
    }

    // POST /api/categories
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $category = Category::create($request->only('name'));

        return response()->json($category, 201);
    }

    // GET /api/categories/{id}
    public function show($id)
    {
        return response()->json(Category::findOrFail($id));
    }

    // PUT /api/categories/{id}
    public function update(Request $request, $id)
    {
        $category = Category::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $category->update($request->only('name'));

        return response()->json($category);
    }

    // DELETE /api/categories/{id}
    public function destroy($id)
    {
        Category::destroy($id);
        return response()->json(null, 204);
    }
}