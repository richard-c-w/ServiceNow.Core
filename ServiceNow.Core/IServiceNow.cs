﻿using Microsoft.Extensions.Logging;
using SNow.Core.Models;
using SNow.Core.ServiceCatalog;
using SNow.Core.SetImport;
using System;
using System.Threading.Tasks;

namespace SNow.Core
{
    public interface IServiceNow
    {
        string Token { get; set; }
        string BaseAddress { get; }
        string BasicAuthParams { get; }

        /// <summary>
        /// Set the table to be used
        /// </summary>
        /// <typeparam name="T">Model representing the return type, can use attributes to automatic mapping</typeparam>
        /// <param name="tableName"></param>
        /// <returns></returns>
        ITable<T> UsingTable<T>(string tableName, ILogger logger = null) where T : ServiceNowBaseModel;
        /// <summary>
        /// <summary>
        /// Set the table to be used
        /// </summary>
        /// <typeparam name="T">Model representing the return type, can use attributes to automatic mapping</typeparam>
        /// <param name="logger"></param>
        /// <returns></returns>
        ITable<T> UsingTable<T>(ILogger logger = null) where T : ServiceNowBaseModel;

        /// <summary>
        /// Set the table to be used
        /// </summary>
        /// <param name="tableName"></param>
        /// <param name="logger"></param>
        /// <returns></returns>
        ITable UsingTable(string tableName, ILogger logger = null);

        ICatalogService UsingCatalog(Guid catalogItemId);
        ICatalogService<T> UsingCatalog<T>(Guid catalogItemId) where T : ServiceNowBaseModel;

        //IImportSet<T> UsingImportSet<T>(string tableName) where T : ServiceNowBaseModel;
        IImportSet UsingImportSet(string tableName);

        Task<string> AuthenticateAsync();
    }
}