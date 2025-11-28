import { Search, Filter, Heart, Clock, Users } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const recipes = [
  {
    id: 1,
    title: "Desayuno Energético Completo",
    image: "/breakfast-bowl-with-fruits-and-nuts.jpg",
    time: "15 min",
    servings: "4 personas",
    rating: 5,
    category: "Desayuno",
  },
  {
    id: 2,
    title: "Bowl de Smoothie con Frutas",
    image: "/smoothie-bowl-with-toppings.jpg",
    time: "10 min",
    servings: "2 personas",
    rating: 4.8,
    category: "Desayuno",
  },
  {
    id: 3,
    title: "Ensalada Colorida con Vegetales",
    image: "/colorful-vegetable-salad.jpg",
    time: "20 min",
    servings: "4 personas",
    rating: 4.9,
    category: "Almuerzo",
  },
  {
    id: 4,
    title: "Tostadas de Aguacate Nutritivas",
    image: "/avocado-toast-on-whole-grain-bread.jpg",
    time: "10 min",
    servings: "2 personas",
    rating: 4.7,
    category: "Almuerzo",
  },
  {
    id: 5,
    title: "Snack de Frutas Frescas",
    image: "/fresh-fruit-platter.png",
    time: "5 min",
    servings: "1 persona",
    rating: 4.6,
    category: "Snacks",
  },
  {
    id: 6,
    title: "Preparación de Vegetables al Horno",
    image: "/roasted-vegetables.png",
    time: "30 min",
    servings: "4 personas",
    rating: 4.8,
    category: "Cenas",
  },
]

export default function Recipes() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-orange-600 mb-2">Recetas Saludables y Rápidas</h1>
        <p className="text-gray-600">
          Opciones nutritivas que optimizan tu tiempo y priorizan la alimentación infantil
        </p>
      </div>

      {/* Search and Filters */}
      <Card className="p-4">
        <div className="flex gap-4 items-center">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input placeholder="Buscar recetas..." className="pl-10" />
            </div>
          </div>
          <Button variant="outline" className="border-orange-600 text-orange-600 bg-transparent">
            <Filter className="w-4 h-4 mr-2" /> Filtros
          </Button>
        </div>

        {/* Recipe Filter Tags */}
        <div className="flex gap-2 mt-4 flex-wrap">
          {["Desayuno", "Almuerzo", "Cenas", "Snacks", "<15 min"].map((filter) => (
            <button
              key={filter}
              className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm hover:bg-orange-200"
            >
              {filter}
            </button>
          ))}
        </div>
      </Card>

      {/* Featured Recipe */}
      <Card className="p-6 border-l-4 border-orange-600">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <img src="/featured-healthy-breakfast.jpg" alt="Featured" className="w-full h-64 object-cover rounded-lg" />
            <div className="mt-4 bg-orange-100 text-orange-600 inline-block px-3 py-1 rounded-full text-sm font-semibold">
              ⭐ Receta Destacada
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Desayuno Energético Completo</h2>
            <p className="text-gray-600 mb-4">
              Un desayuno balanceado con avena, frutas frescas, frutos secos y miel natural. Rico en fibra, proteínas y
              vitaminas esenciales para comenzar el día con energía.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-gray-700">
                <Clock className="w-4 h-4 text-orange-600" />
                <span>15 min</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Users className="w-4 h-4 text-orange-600" />
                <span>4 personas</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Heart className="w-4 h-4 text-orange-600" />
                <span className="text-yellow-500">★★★★★ (5.0)</span>
              </div>
            </div>
            <Button className="w-full bg-orange-600 hover:bg-orange-700">Ver receta completa</Button>
          </div>
        </div>
      </Card>

      {/* Category Cards */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { emoji: "🍳", label: "Desayunos", count: "24 recetas" },
          { emoji: "🥗", label: "Almuerzos", count: "32 recetas" },
          { emoji: "🍽️", label: "Cenas", count: "28 recetas" },
          { emoji: "🍎", label: "Snacks", count: "41 opciones" },
        ].map((cat) => (
          <Button
            key={cat.label}
            variant="outline"
            className="h-24 flex flex-col items-center justify-center hover:bg-orange-50 border-orange-200 bg-transparent"
          >
            <span className="text-3xl mb-2">{cat.emoji}</span>
            <span className="font-semibold text-gray-800">{cat.label}</span>
            <span className="text-xs text-gray-600">{cat.count}</span>
          </Button>
        ))}
      </div>

      {/* All Recipes Grid */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">Todas las Recetas</h3>
        <div className="grid grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <Card key={recipe.id} className="overflow-hidden hover:shadow-lg transition">
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={recipe.image || "/placeholder.svg"}
                  alt={recipe.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
                <div className="absolute top-2 right-2 bg-white rounded-full p-2">
                  <span className="text-sm font-semibold text-orange-600">⭐ 4.8</span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs text-orange-600 font-semibold mb-2">{recipe.category}</p>
                <h3 className="font-bold text-gray-800 mb-3">{recipe.title}</h3>
                <div className="flex gap-4 text-xs text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {recipe.time}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" /> {recipe.servings}
                  </div>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white text-sm">Ver receta</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Cooking Tips */}
      <Card className="bg-green-50 border border-green-200 p-6">
        <h3 className="font-bold text-green-700 mb-4">Consejos para Cocinar con Niños</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Seguridad Primero</h4>
            <p className="text-sm text-gray-600">
              Supervisa siempre a los niños cerca de cuchillos y fuego. Asigna tareas apropiadas para su edad.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Hado Divertido</h4>
            <p className="text-sm text-gray-600">
              Convierte la cocina en un juego. ¡Los cortadores de formas y dejo decorar platos.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Enseña Nutrición</h4>
            <p className="text-sm text-gray-600">Explica los beneficios de cada ingrediente mientras cocina juntos.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Sé Paciente</h4>
            <p className="text-sm text-gray-600">
              El resultado puede no ser perfecto, pero el proceso de aprendizaje es invaluable.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
