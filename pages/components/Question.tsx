import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";

//QUESTION
export default function Question(question: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode) {
    return <div className="container lex flex-1 items-center justify-center sm:items-stretch sm:justify-start mt-2">
        <div className="sm:block">
           <h2>Question 1:</h2>
            <p className ='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper leo a est lacinia, sed scelerisque eros rutrum. Proin vitae massa pretium, pellentesque sapien at, semper lacus. Donec blandit neque sapien, ac lacinia erat efficitur non. Vestibulum non lectus non nisi fringilla viverra. Sed dapibus lorem fermentum dui eleifend, vitae sagittis urna convallis. Etiam tortor dolor, maximus a iaculis non, viverra sed elit. Sed hendrerit ullamcorper sapien id tincidunt. Nam suscipit scelerisque eros id aliquet. Nunc pulvinar eros nulla, nec faucibus tellus aliquam ut. Donec mauris diam, porta tincidunt blandit nec, vulputate et est. Fusce odio nunc, tincidunt eget interdum id, fermentum a mi. Etiam rutrum vestibulum sem at pellentesque. Sed at odio nec purus cursus consectetur. Pellentesque vel massa nisl. Curabitur pulvinar ut diam sit amet pulvinar.

            </p>
        </div>
    </div>
}
