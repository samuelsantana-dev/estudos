package com.example.projeto_samuel

import android.content.Intent
import android.os.Bundle
import android.view.Menu
import android.view.MenuItem
import android.widget.ImageView
import androidx.appcompat.app.AppCompatActivity
import coil.load
class investimentoMedioPrazo : AppCompatActivity() {
        override fun onCreate(savedInstanceState: Bundle?) {
            super.onCreate(savedInstanceState)
            setContentView(R.layout.investimento_medio_prazo)


            //Chama a imagem da internet e coloca ela no xml
            val imageUm = findViewById<ImageView>(R.id.imagemMedioUm)
            imageUm.load("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe8P9h5hDtVuJGIWcUpbg8f3bBFEgm5T6NSQ&usqp=CAU")

            val imagemMediDois = findViewById<ImageView>(R.id.imagemMedioDois)
            imagemMediDois.load("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBsGD0XtTwWGXbMhW3XrNoUjh8cpoip3hIsg&usqp=CAU")

            val imagemMedioTres = findViewById<ImageView>(R.id.imagemMedioTres)
            imagemMedioTres.load("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRphh2z_mpFov5_rZNmyKAmTXfJewN-M4G1qg&usqp=CAU")

        }

        //Lozalizou o menu que é no arquivo menu.xml
        override fun onCreateOptionsMenu(menu: Menu?): Boolean {
            menuInflater.inflate(R.menu.menu, menu)
            return super.onCreateOptionsMenu(menu)
    }


    //Direcionamentos para dos link quando forem clicados para as outras paginas
    override  fun onOptionsItemSelected(item: MenuItem): Boolean {
        return when (item.itemId){
            R.id.curtoPrazo -> {
                val curtoPrazo = Intent(this, investimentosCurtoPrazo::class.java)
                startActivity(curtoPrazo)
                true
            }
            R.id.medioPrazo -> {
                val medioPrazo = Intent(this, investimentoMedioPrazo::class.java)
                startActivity(medioPrazo)
                true
            }
            R.id.longoPrazo -> {
                val longoPrazo = Intent(this, investimentoLongoPrazo::class.java)
                startActivity(longoPrazo)
                true
            }
            R.id.activityMain -> {
                val paginaPrincipal = Intent(this, MainActivity::class.java)
                startActivity(paginaPrincipal)
                true
            }
            else -> {
                false
                //super.onOptionsItemSelected(item)
            }
        }
    }
    }
