import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ProductsService } from "./products.service"
import { Product } from "./entity/product.entity";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Post()
    create(@Body() createDto: CreateProductDto) {
        return this.productsService.create(createDto);
    }
    @Get()
    async getAll(): Promise<Product[]> {
        return this.productsService.findAll();
    }

    // @Get('categories')
    // getCategories() {
    //     return this.productsService.findCategories();
    // }
    
    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number): Promise<Product> {
        const product = await this.productsService.findOne(id);;
        if (!product) {
            throw new NotFoundException('Product with id ${id} not found');
        }
        return product;
    }

    @Put(':id')
    async update(
        @Param('id', ParseIntPipe) id: number, 
        @Body() updateDto: UpdateProductDto
    ) {
        const updated = await this.productsService.update(id, updateDto);
        if (!updated) {
            throw new NotFoundException('Cannot update product - ${id} not found');
        }
        return updated;
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number) {
        const deleted = await this.productsService.remove(id);
        if (!deleted) {
            throw new NotFoundException('Cannot delete product - ${id} not found');
        }
        return deleted;
    }
}