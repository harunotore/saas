import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageWithBackButton } from "../../components/PageWithBackButton";
import { ProductDetailsForm } from "../../forms/ProductDetailsForm";

export default function NewProductsPage() {
    return (
        <PageWithBackButton
            backButtonHref="/dashbaord/products"
            pageTitle="Create Product">

            <Card>
                <CardHeader>
                    <CardTitle className="text-xl">Product Details</CardTitle>
                </CardHeader>
                <CardContent>
                    <ProductDetailsForm />
                </CardContent>
            </Card>
        </PageWithBackButton>
    )
}