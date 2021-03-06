import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import  PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';


function CadastroVideo() {
  const history = useHistory();
  const { handleChange, values } = useForm({
    titulo: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=k1vdmXDgMJI&list=PLTcmLKdIkOWkkBSilAr6iqdnSDXdiiyIq',
    categoria: 'React Native'

  });  

    return (
            <PageDefault>

           <h1>Cadastro de Video</h1>

           <form onSubmit={(event) => {
             event.preventDefault();

             videosRepository.create({
               titulo: values.titulo,
               url: values.url,
               categoriaId: 1,
             })
             .then(() => {
              history.push('/');
             });

             
           }}>
           <FormField 
              label="Titulo do video"
              name="titulo"
              value={values.titulo}
              onChange={handleChange}
              />

              <FormField 
              label="URL"
              name="url"
              value={values.url}
              onChange={handleChange}
              />

              <FormField 
              label="Categoria"
              name="url"
              value={values.categoria}
              onChange={handleChange}
              />

              <Button type="submit">
                Cadastrar
              </Button>

           </form>

            <Link to="/cadastro/categoria">
              Cadastrar Categoria
            </Link>
            </PageDefault>

        
    )
}

export default CadastroVideo;