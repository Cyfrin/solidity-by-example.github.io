// metadata
export const version = "0.8.13"
export const title = "ERC721"
export const description = "Example of ERC721 non fungible token in Solidity"

const html = `<p>Example of ERC721</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC165</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">supportsInterface</span>(<span class="hljs-params"><span class="hljs-keyword">bytes4</span> interfaceID</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC721</span> <span class="hljs-keyword">is</span> <span class="hljs-title">IERC165</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">balanceOf</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> owner</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> balance</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">ownerOf</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> tokenId</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span> owner</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">safeTransferFrom</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint</span> tokenId
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">safeTransferFrom</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint</span> tokenId,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transferFrom</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint</span> tokenId
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">approve</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint</span> tokenId</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getApproved</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> tokenId</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span> operator</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setApprovalForAll</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> operator, <span class="hljs-keyword">bool</span> _approved</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">isApprovedForAll</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> owner, <span class="hljs-keyword">address</span> operator</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC721Receiver</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">onERC721Received</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> operator,
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">uint</span> tokenId,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span></span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">ERC721</span> <span class="hljs-keyword">is</span> <span class="hljs-title">IERC721</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> <span class="hljs-keyword">from</span>, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> to, <span class="hljs-keyword">uint</span> <span class="hljs-keyword">indexed</span> id</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Approval</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> owner, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> spender, <span class="hljs-keyword">uint</span> <span class="hljs-keyword">indexed</span> id</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">ApprovalForAll</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> owner,
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> operator,
        <span class="hljs-keyword">bool</span> approved
    </span>)</span>;

    <span class="hljs-comment">// Mapping from token ID to owner address</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">uint</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">address</span>) <span class="hljs-keyword">internal</span> _ownerOf;

    <span class="hljs-comment">// Mapping owner address to token count</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint</span>) <span class="hljs-keyword">internal</span> _balanceOf;

    <span class="hljs-comment">// Mapping from token ID to approved address</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">uint</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">address</span>) <span class="hljs-keyword">internal</span> _approvals;

    <span class="hljs-comment">// Mapping from owner to operator approvals</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">bool</span>)) <span class="hljs-keyword">public</span> isApprovedForAll;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">supportsInterface</span>(<span class="hljs-params"><span class="hljs-keyword">bytes4</span> interfaceId</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>) </span>{
        <span class="hljs-keyword">return</span>
            interfaceId <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-keyword">type</span>(IERC721).<span class="hljs-built_in">interfaceId</span> <span class="hljs-operator">|</span><span class="hljs-operator">|</span>
            interfaceId <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-keyword">type</span>(IERC165).<span class="hljs-built_in">interfaceId</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">ownerOf</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> id</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span> owner</span>) </span>{
        owner <span class="hljs-operator">=</span> _ownerOf[id];
        <span class="hljs-built_in">require</span>(owner <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"token doesn&#x27;t exist"</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">balanceOf</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> owner</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-built_in">require</span>(owner <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"owner = zero address"</span>);
        <span class="hljs-keyword">return</span> _balanceOf[owner];
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setApprovalForAll</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> operator, <span class="hljs-keyword">bool</span> approved</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        isApprovedForAll[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>][operator] <span class="hljs-operator">=</span> approved;
        <span class="hljs-keyword">emit</span> ApprovalForAll(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, operator, approved);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">approve</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> spender, <span class="hljs-keyword">uint</span> id</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-keyword">address</span> owner <span class="hljs-operator">=</span> _ownerOf[id];
        <span class="hljs-built_in">require</span>(
            <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> owner <span class="hljs-operator">|</span><span class="hljs-operator">|</span> isApprovedForAll[owner][<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>],
            <span class="hljs-string">"not authorized"</span>
        );

        _approvals[id] <span class="hljs-operator">=</span> spender;

        <span class="hljs-keyword">emit</span> Approval(owner, spender, id);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getApproved</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> id</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>) </span>{
        <span class="hljs-built_in">require</span>(_ownerOf[id] <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"token doesn&#x27;t exist"</span>);
        <span class="hljs-keyword">return</span> _approvals[id];
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_isApprovedOrOwner</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> owner,
        <span class="hljs-keyword">address</span> spender,
        <span class="hljs-keyword">uint</span> id
    </span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>) </span>{
        <span class="hljs-keyword">return</span> (spender <span class="hljs-operator">=</span><span class="hljs-operator">=</span> owner <span class="hljs-operator">|</span><span class="hljs-operator">|</span>
            isApprovedForAll[owner][spender] <span class="hljs-operator">|</span><span class="hljs-operator">|</span>
            spender <span class="hljs-operator">=</span><span class="hljs-operator">=</span> _approvals[id]);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transferFrom</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint</span> id
    </span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-keyword">from</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> _ownerOf[id], <span class="hljs-string">"from != owner"</span>);
        <span class="hljs-built_in">require</span>(to <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"transfer to zero address"</span>);

        <span class="hljs-built_in">require</span>(_isApprovedOrOwner(<span class="hljs-keyword">from</span>, <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, id), <span class="hljs-string">"not authorized"</span>);

        _balanceOf[<span class="hljs-keyword">from</span>]<span class="hljs-operator">-</span><span class="hljs-operator">-</span>;
        _balanceOf[to]<span class="hljs-operator">+</span><span class="hljs-operator">+</span>;
        _ownerOf[id] <span class="hljs-operator">=</span> to;

        <span class="hljs-keyword">delete</span> _approvals[id];

        <span class="hljs-keyword">emit</span> Transfer(<span class="hljs-keyword">from</span>, to, id);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">safeTransferFrom</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint</span> id
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        transferFrom(<span class="hljs-keyword">from</span>, to, id);

        <span class="hljs-built_in">require</span>(
            to.<span class="hljs-built_in">code</span>.<span class="hljs-built_in">length</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">0</span> <span class="hljs-operator">|</span><span class="hljs-operator">|</span>
                IERC721Receiver(to).onERC721Received(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">from</span>, id, <span class="hljs-string">""</span>) <span class="hljs-operator">=</span><span class="hljs-operator">=</span>
                IERC721Receiver.onERC721Received.<span class="hljs-built_in">selector</span>,
            <span class="hljs-string">"unsafe recipient"</span>
        );
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">safeTransferFrom</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint</span> id,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        transferFrom(<span class="hljs-keyword">from</span>, to, id);

        <span class="hljs-built_in">require</span>(
            to.<span class="hljs-built_in">code</span>.<span class="hljs-built_in">length</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">0</span> <span class="hljs-operator">|</span><span class="hljs-operator">|</span>
                IERC721Receiver(to).onERC721Received(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">from</span>, id, data) <span class="hljs-operator">=</span><span class="hljs-operator">=</span>
                IERC721Receiver.onERC721Received.<span class="hljs-built_in">selector</span>,
            <span class="hljs-string">"unsafe recipient"</span>
        );
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_mint</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint</span> id</span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> </span>{
        <span class="hljs-built_in">require</span>(to <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"mint to zero address"</span>);
        <span class="hljs-built_in">require</span>(_ownerOf[id] <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"already minted"</span>);

        _balanceOf[to]<span class="hljs-operator">+</span><span class="hljs-operator">+</span>;
        _ownerOf[id] <span class="hljs-operator">=</span> to;

        <span class="hljs-keyword">emit</span> Transfer(<span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), to, id);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_burn</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> id</span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> </span>{
        <span class="hljs-keyword">address</span> owner <span class="hljs-operator">=</span> _ownerOf[id];
        <span class="hljs-built_in">require</span>(owner <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"not minted"</span>);

        _balanceOf[owner] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;

        <span class="hljs-keyword">delete</span> _ownerOf[id];
        <span class="hljs-keyword">delete</span> _approvals[id];

        <span class="hljs-keyword">emit</span> Transfer(owner, <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), id);
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MyNFT</span> <span class="hljs-keyword">is</span> <span class="hljs-title">ERC721</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">mint</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint</span> id</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        _mint(to, id);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">burn</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> id</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> _ownerOf[id], <span class="hljs-string">"not owner"</span>);
        _burn(id);
    }
}
</code></pre>
`

export default html
