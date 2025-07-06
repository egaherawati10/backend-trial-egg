import { Injectable } from '@nestjs/common';
import { mockProducts } from './mockup/mockProducts';
import { Product } from './entity/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
    private products = mockProducts;
    private id = 1;

    create(createDto: CreateProductDto): Product {
        const product = { id: this.products.length + 1, ...createDto };
        this.products.push(product);
        return product;
    }

    findAll(): Product[] {
        return this.products;
    }

    findOne(id: number): Product | null {
        const product = this.products.find((product) => product.id === id);
        return product || null;
    }

    // findCategories() {
    //     const categories = [...new Set(this.products.map((product) => product.category))];
    //     return categories;
    // }

    update(id: number, updateDto: UpdateProductDto): Product | null {
        const index = this.products.findIndex(product => product.id === id);
        if (index === -1) return null;

        const updated = { ...this.products[index], ...updateDto };
        this.products[index] = updated;
        return updated;
    }

    remove(id: number): Product | null {
        const index = this.products.findIndex(product => product.id === id);
        if (index === -1) return null;
        
        const deleted = this.products.splice(index, 1);
        return deleted[0];
    }
}
