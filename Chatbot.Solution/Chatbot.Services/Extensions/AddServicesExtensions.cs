﻿using Chatbot.API.Repository;
using Chatbot.Infrastructure.Interfaces;
using Chatbot.Infrastructure.Repository.Interfaces;
using Chatbot.Infrastructure.Services;
using Chatbot.Infrastructure.Services.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Chatbot.Infrastructure.Extensions;
using Chatbot.Services.Services.Interfaces;
using Chatbot.Services.Services;
using Microsoft.AspNetCore.Authentication.Cookies;

namespace Chatbot.Services.Extensions
{
    public static class AddServicesExtensions
    {
        public static void AddServicesSetup(this IServiceCollection services)
        {
            services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
            .AddCookie(options =>
            {
                options.LoginPath = "/Usuarios/Index";
                options.Cookie.Name = "UsuarioDados";
                options.LogoutPath = "/Usuarios/Logout";
                options.AccessDeniedPath = "/Usuarios/Index";
            });

            services.AddTransient<IContatoInterfaceServices, ContatoServices>();
            services.AddTransient<IMensagemInterfaceServices, MensagemServices>();
            services.AddTransient<IMenuInterfaceServices, MenuServices>();
            services.AddTransient<IOptionInterfaceServices, OptionServices>();
            services.AddTransient<IDepartamentoInterfaceServices, DepartamentoServices>();
            services.AddTransient<ILoginInterfaceServices, LoginServices>();
            services.AddTransient<IAtendenteInterfaceServices, AtendenteServices>();
            services.AddTransient<IChatsInterfaceServices, ChatsServices>();
            services.AddTransient<IAtendimentoInterfaceServices, AtendimentoServices>();
            services.AddHttpContextAccessor();
        }
    }
}
